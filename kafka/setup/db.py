import psycopg2
import os


class query:
    writeType = "write"
    readType = "read"

    def __init__(self, table):
        self.table = table
        self.db = os.getenv("PG_SCHEMA")

    def select(self, *columns):
        self.type = query.readType
        cols = ','.join(columns) if columns else '*'
        self.q = f'select {cols} from {self.db}.{self.table} as {self.table} '
        return self

    def join(self, join_table):
        self.q += f'inner join {self.db}.{join_table} as {join_table} on {join_table}.%s={self.table}.%s '
        return self

    def on(self, *join_cols):
        if len(join_cols) == 1:
            self.q = self.q % (join_cols[0], join_cols[0])
        else:
            self.q = self.q % (join_cols[0], join_cols[1])
        return self

    def where(self, *columns):
        temp = ""
        for col, val in zip(columns, self.values):
            col = self.table + "." + col
            temp += col + \
                "='%s' and " % val if isinstance(
                    val, str) else col + "=%s and " % val
        temp = temp[:-4]
        self.q += f'where {temp} '
        return self

    def into(self, *columns):
        self.columns = columns
        cols = ','.join(columns)
        pks = ','.join(self.pk)
        vals = sets = ""
        for col, val in zip(columns, self.values):
            vals += "'%s'," % val if isinstance(val, str) else "%s," % val
            sets += col + f'=EXCLUDED.{col},'
        vals = vals[:-1]
        sets = sets[:-1]
        self.q = f'''
        insert into {self.db}.{self.table} ({cols}) values ({vals})
        on conflict ({pks}) do update set {sets}
        '''
        return self

    def pk(self, *pk):
        self.pk = pk
        return self

    def write(self, *values):
        self.type = query.writeType
        self.values = values
        return self

    def eql(self, *values):
        self.values = values
        return self

    def eval(self):
        try:
            con = self.conn()
            cur = con.cursor()
            print(f'Executing {self.q}')
            cur.execute(self.q)
            # Get the fields name (only once!)
            if self.type == query.writeType:
                con.commit()
                # read the latest update
                self.select().eql(*self.values).where(*self.columns)
                cur.execute(self.q)

            field_name = [field[0] for field in cur.description]
            # map col name to val
            return [dict(zip(field_name, row)) for row in cur.fetchall()]

        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while creating PostgreSQL table", error)
        finally:
            # closing database connection.
            if con:
                cur.close()
                con.close()
                print("PostgreSQL connection is closed")

    def conn(self):
        try:
            connection = psycopg2.connect(
                database=os.getenv("PG_DBNAME"),
                user=os.getenv("PG_USER"),
                password=os.getenv("PG_PASSWORD"),
                host=os.getenv("PG_HOST"),
                port=os.getenv("PG_PORT")
            )
            print("Database opened successfully")
            return connection
        except (Exception, psycopg2.DatabaseError) as error:
            print("Error while creating PostgreSQL table", error)
            return error
