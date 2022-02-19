from utilities.db.db_manager import dbManager


class Order:
    @staticmethod
    def save_order(AddressCity, AddressStreet, AddressHouse,  CustomerEmail, Cost):
        return dbManager.commit(f"INSERT INTO `group22`.`order` (`Address-Street`, `Address-City`, `Address-House`,  `CustomerEmail`, `Cost`) VALUES ('{AddressStreet}',  '{AddressCity}',  '{AddressHouse}', '{CustomerEmail}', '{Cost}');")
