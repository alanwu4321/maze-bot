from pytrends.request import TrendReq
import pandas as pd
pytrends = TrendReq(hl='en-US', tz=360)
kw_list = ["macbook"]
frames = list()
df = pytrends.get_historical_interest(kw_list, year_start=2020, month_start=1, day_start=1, hour_start=0, year_end=2020, month_end=2, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)
frames.append(df)
df = pytrends.get_historical_interest(kw_list, year_start=2019, month_start=11, day_start=1, hour_start=0, year_end=2019, month_end=12, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)
frames.append(df)
res = pd.concat(frames)
res.to_csv ('file1.csv', header=True) #Don't forget to add '.csv' at the end of the path
