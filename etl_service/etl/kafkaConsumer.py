import threading
import logging
import time
import multiprocessing
import json
from etl.utils import env, gtrend, db
import os
from kafka import KafkaConsumer, KafkaProducer, TopicPartition
from kafka.structs import OffsetAndMetadata

print('__file__={0:<35} | __name__={1:<20} | __package__={2:<20}'.format(__file__,__name__,str(__package__)))

# print(gtrend.getDemand())
# print(db.query("productsupplier").select().join("product").on("p_id").join("supplier").on("s_id").eql(1,3).where("p_id", "s_id").eval())
# print(db.query("productsupplier").select().eval())
# print(db.query("productsupplier").select().eql(1,3).where("p_id", "s_id").eval())
# print(db.query("productsupplier").pk("p_id","s_id","timestamp").write(2, 3, 21.5256, "testing", "NOW").into("p_id","s_id", "price", "url", "timestamp").eval())

# exit(0)


class Consumer(multiprocessing.Process):
    def __init__(self, uuid):
        multiprocessing.Process.__init__(self)
        self.stop_event = multiprocessing.Event()
        self.uuid = uuid

    def stop(self):
        self.stop_event.set()

    def run(self):
        consumer = KafkaConsumer(
            bootstrap_servers=os.getenv('KAFKA_SERVER'),
            consumer_timeout_ms=1000,
            group_id='group',
            value_deserializer=json.loads
        )
        consumer.subscribe(['test4', 'progress'])
        print('Consumer %s Listening', self.uuid)
        while not self.stop_event.is_set():
            for msg in consumer:
                # tp = TopicPartition(msg.topic, msg.partition)
                # offsets = {tp: OffsetAndMetadata(msg.offset, None)}
                # consumer.commit(offsets=offsets)
                # if self.stop_event.is_set() or msg.key == "kill":
                #     break

                print(msg.value)
                store = msg.value['store']
                name = msg.value['data'][0]['name']
                price =  msg.value['data'][0]['price']
                s_id = db.query(db.S).select('s_id').eql(store).where('s_name').eval()[0]['s_id']
                p_id = db.query(db.P).select('p_id').eql(name).where('p_name').eval()[0]['p_id']
                print(s_id, p_id, price)
                rows = db.query(db.PS)
                rows.write(s_id, p_id, price, 'NOW').into('s_id', 'p_id', 'price', 'date')
                print(rows.eval())

                # tp = TopicPartition(msg.topic, msg.partition)
                # offsets = {tp: OffsetAndMetadata(msg.offset, None)}
                # consumer.commit(offsets=offsets)
                # if self.stop_event.is_set() or msg.key == "kill":
                #     break

        print("Consumer Closing")
        consumer.unsuscribe()
        consumer.close()


def main():
    threadiness = int(os.getenv("THREADINESS"))
    tasks = [Consumer(i) for i in range(threadiness)]
    for t in tasks:
        t.start()

    # time.sleep(10)

    # for task in tasks:
    #     task.stop()

    # for task in tasks:
    #     task.join()


if __name__ == "__main__":

    # pass
    # logging.basicConfig(
    #     format='%(asctime)s.%(msecs)s:%(name)s:%(thread)d:%(levelname)s:%(process)d:%(message)s',
    #     level=logging.INFO
    #     )

    main()
