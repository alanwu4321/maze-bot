from pytrends.request import TrendReq
from pytrends import dailydata
from asdf.utils import db
from asdf.utils import env
import os
import pandas as pd

class demand:
    temp_dir = 'artifact/temp.csv'
    def __init__(self, keyword, start_year_month, end_year_month):
        self.keyword = keyword
        sy, sm = start_year_month.split(".")
        self.year_start, self.month_start = int(sy), int(sm)
        ey, em = end_year_month.split(".")
        self.year_end, self.month_end = int(ey), int(em)

    def getDemand(self):
        try:
            pytrends = TrendReq(hl='en-US', tz=360)
            # kw_list = [self.keyword]
            res = dailydata.get_daily_data(self.keyword, start_year=self.year_start, start_mon=self.month_start, stop_year=self.year_end, stop_mon=self.month_end, geo='', wait_time = 10)
            # print(df)
            # res = pytrends.get_historical_interest(kw_list, year_start=self.year_start, month_start=self.month_start, day_start=1,
            #                                        hour_start=0, year_end=self.year_end, month_end=self.month_end, day_end=1, hour_end=0, cat=0, geo='', gprop='', sleep=0)
            # res.to_csv(demand.temp_dir)
            # df = pd.read_csv(demand.temp_dir)
            # for i in df.index:
            #     df.iat[i, 0] = df["date"][i][:10]
            return res
        finally:
            # os.remove(demand.temp_dir)
            pass
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

# product_id = 1
# p = db.query(db.P).select().eql(product_id).where("p_id").eval()
# print(p[0]['keyword'])
# keyword = p[0]['keyword']
# d = demand(keyword, "2019.3", "2019.4")
# df = d.getDemand()
# for i, row in df.iterrows():
#     print('index: ', str(i.to_pydatetime().date()), 'col g:', row[keyword])
#     db.query(db.PD).write(
#         product_id, 
#         str(i.to_pydatetime().date()),
#         float(row[keyword]),
#     ).into(
#         *db.Cols[db.PD]
#     ).eval()
#     print('inserted')

