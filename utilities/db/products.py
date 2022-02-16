from utilities.db.db_manager import dbManager


class Product:
    @staticmethod
    def get_cookies():
        return dbManager.fetch(f"SELECT * FROM cookies")


    @staticmethod
    def get_packs():
        return dbManager.fetch(f"SELECT * FROM packs")
