from pytrends.request import TrendReq
from pytrends import dailydata
from etl.utils import db
from etl.utils import env
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
            res = dailydata.get_daily_data(self.keyword, start_year=self.year_start, start_mon=self.month_start, stop_year=self.year_end, stop_mon=self.month_end, geo='', wait_time = 10)
            return res
        finally:
            # os.remove(demand.temp_dir)
            pass

product_id = 9
# p = db.query(db.P).select().eql(product_id).where("p_id").eval()
# print(p[0]['keyword'])
# keyword = p[0]['keyword']
keyword = "lg tv"
d = demand(keyword, "2020.2", "2020.3")
df = d.getDemand()
for i, row in df.iterrows():
    print('index: ', str(i.to_pydatetime().date()), 'col g:', row[keyword])
    db.query(db.PD).write(
        product_id, 
        str(i.to_pydatetime().date()),
        float(row[keyword]),
    ).into(
        *db.Cols[db.PD]
    ).eval()
    print('inserted')

