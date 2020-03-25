
# kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
#!/bin/sh
#!/bin/sh
SESSION_NAME="hi"

tmux has-session -t ${SESSION_NAME}

if [ $? != 0 ]
then
  # Create the session
  tmux new-session -s ${SESSION_NAME} -n name -d

  # First window (0) -- vim and console
  # tmux send-keys -t ${SESSION_NAME}

  # shell (1)
  tmux new-window -n bash -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:2 'git status' C-m
  tmux split-window -v
  tmux send-keys -t ${SESSION_NAME}:2 'ls' C-m

  # shell (1)
  tmux new-window -n kafka -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:3 'zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties' C-m
  tmux split-window -v
  sleep 5
  tmux send-keys -t ${SESSION_NAME}:3 'kafka-server-start /usr/local/etc/kafka/server.properties' C-m

  # server/debug log (3)
  tmux new-window -n redis -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:4 'brew services start redis' C-m

  sleep 5

  # js console (4)
  tmux new-window -n js-api -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:5 'nodemon ./server.js' C-m

  # kafka console (4)
  tmux new-window -n kafka-consumer -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:6 'python3 ./kafka/kafka-consumer.py' C-m

  # python server console (4)
  tmux new-window -n python-api -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:7 'python3 ./kafka/server.py' C-m

  # Start out on the first window when we attach
  tmux select-window -t ${SESSION_NAME}:1
fi
tmux attach -t ${SESSION_NAME}