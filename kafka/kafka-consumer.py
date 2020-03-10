import threading
import logging
import time
import multiprocessing
import json
from setup import env, db
import os
from kafka import KafkaConsumer, KafkaProducer, TopicPartition
from kafka.structs import OffsetAndMetadata



print(db.query("productsupplier").select().eql(1,3).where("p_id", "s_id").eval())

# print(db.query("productsupplier").pk("p_id","s_id").write(3, 1, "testing").into("p_id","s_id", "url").eval())

exit(0)

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
                print(msg.partition)
                print(self.uuid, msg.key, msg.value, msg.topic)

                tp = TopicPartition(msg.topic, msg.partition)
                offsets = {tp: OffsetAndMetadata(msg.offset, None)}
                consumer.commit(offsets=offsets)
                if self.stop_event.is_set() or msg.key == "kill":
                    break

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
    
    pass
    # logging.basicConfig(
    #     format='%(asctime)s.%(msecs)s:%(name)s:%(thread)d:%(levelname)s:%(process)d:%(message)s',
    #     level=logging.INFO
    #     )

    # main()
