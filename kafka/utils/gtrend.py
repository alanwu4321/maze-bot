from pytrends.request import TrendReq
import datetime
from datetime import date
import pandas as pd


def getDemand():
    keyword = "macbook"
    date = "date"
    pytrend = TrendReq(hl='en-US', tz=360)
    kw_list = ["macbook"]
    # bb = pytrends.suggestions(keyword)
    # print(bb)
    # pytrend.build_payload(kw_list)
    # # Related Queries, returns a dictionary of dataframes
    # related_queries_dict = pytrend.related_queries()
    # print(related_queries_dict)

    
    # # frames = list()
    # # df = pytrends.get_historical_interest(kw_list, year_start=2020, month_start=1, day_start=1, hour_start=0, year_end=2020, month_end=2, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)
    # # frames.append(df)
    # # df = pytrends.get_historical_interest(kw_list, year_start=2019, month_start=11, day_start=1, hour_start=0, year_end=2019, month_end=12, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)
    # # frames.append(df)
    # # res = pd.concat(frames)

    a = pd.read_csv('file1.csv') #Don't forget to add '.csv' at the end of the path
    for i in a.index:
        # change date format
        a.iat[i, 0] = a[date][i][:10]
    return a.groupby([date]).mean()

    # print(a)
