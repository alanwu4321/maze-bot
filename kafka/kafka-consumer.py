import threading
import logging
import time
import multiprocessing
import json
from kafka import KafkaConsumer, KafkaProducer, TopicPartition
# from kafka.partitioner import RoundRobinPartitioner
# from kafka.coordinator.assignors.roundrobin import RoundRobinPartitionAssignor
from kafka.structs import OffsetAndMetadata


class Producer(threading.Thread):
    def __init__(self):
        threading.Thread.__init__(self)
        self.stop_event = threading.Event()

    def stop(self):
        self.stop_event.set()

    def run(self):
        # # given that topic `topic` has at least 2 partitions
        # partitioner = RoundRobinPartitioner(partitions=[
        #     TopicPartition(topic='cat', partition=0),
        #     TopicPartition(topic='cat', partition=1)
        # ])
        producer = KafkaProducer(bootstrap_servers='localhost:9092')
        count = 0
        while not self.stop_event.is_set():
            count += 1
            producer.send('cat', str(count))
            time.sleep(1)
        producer.flush()
        producer.close()

class Consumer(multiprocessing.Process):
    def __init__(self, uuid):
        multiprocessing.Process.__init__(self)
        self.stop_event = multiprocessing.Event()
        self.uuid = uuid

    def stop(self):
        self.stop_event.set()

    def run(self):
        consumer = KafkaConsumer(
            bootstrap_servers='localhost:9092',
            consumer_timeout_ms=1000,
            group_id='group',
            value_deserializer=json.loads
        )
        consumer.subscribe(['test4', 'progress'])
        print("Consumer Listening")
        while not self.stop_event.is_set():
            for msg in consumer:
                print(msg.partition)
                # print(json.loads(message[6])['data']['name'])
                # print ("%s:%d:%d: key=%s value=%s" % (message.topic, message.partition,
                #                           message.offset, message.key,
                #                           message.value))
                print(msg.key, msg.value, msg.topic, self.uuid)

                tp = TopicPartition(msg.topic, msg.partition)
                offsets = {tp: OffsetAndMetadata(msg.offset, None)}
                consumer.commit(offsets=offsets)
                if self.stop_event.is_set() or msg.key == "kill":
                    break

        print("Consumer Closing")
        consumer.unsuscribe()
        consumer.close()

def main():
    tasks = [
        Consumer("consumer 1"),
        Consumer("consumer 2"),
        Consumer("consumer 3"),
        Consumer("consumer 4"),
    ]

    for t in tasks:
        t.start()

    # time.sleep(10)

    # for task in tasks:
    #     task.stop()

    # for task in tasks:
    #     task.join()


if __name__ == "__main__":
    # logging.basicConfig(
    #     format='%(asctime)s.%(msecs)s:%(name)s:%(thread)d:%(levelname)s:%(process)d:%(message)s',
    #     level=logging.INFO
    #     )

    main()
