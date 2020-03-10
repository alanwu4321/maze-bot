zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties & kafka-server-start /usr/local/etc/kafka/server.properties & redis-server /usr/local/etc/redis.conf

# kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test