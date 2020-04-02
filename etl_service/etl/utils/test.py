from datetime import datetime

datetime_str = '2020-03-30 19:40:00.997465-07'
datetime_str1 = '2020-03-30 21:19:41.101361-07'

datetime_str = datetime_str.split(".")[0]
datetime_str1 = datetime_str1.split(".")[0]

datetime_object = datetime.strptime(datetime_str, '%Y-%m-%d %H:%M:%S')
datetime_object1 = datetime.strptime(datetime_str1, '%Y-%m-%d %H:%M:%S')



print(type(datetime_object))
print(datetime_object < datetime_object1)  