from utilities.db.db_manager import dbManager


class Store:
    @staticmethod
    def get_stores():
        return dbManager.fetch(f"SELECT * FROM stores")

    @staticmethod
    def get_store(storeID):
        return dbManager.fetch(f"SELECT * FROM stores WHERE  `storeID`="+storeID)

    @staticmethod
    def find_store(cust_city):
        cust_city.replace(" ", "")
        return dbManager.fetch(f"SELECT StoreID FROM stores WHERE  `storeID`="+cust_city)

