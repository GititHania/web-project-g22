from utilities.db.db_manager import dbManager


class Store:
    @staticmethod
    def get_stores():
        return dbManager.fetch(f"SELECT * FROM stores")

    @staticmethod
    def get_store(storeID):
        return dbManager.fetch(f"SELECT * FROM stores WHERE  `storeID`="+storeID)

