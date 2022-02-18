from utilities.db.db_manager import dbManager


class Card:
    @staticmethod
    def get_card(CustomerEmail):
        return dbManager.fetch(f"SELECT * FROM `group22`.`credit_cards` WHERE `CustomerEmail`="+CustomerEmail)

    @staticmethod
    def save_card(Number, CCV, Expire_Date, PayerID,  Valid, CustomerEmail):
        return dbManager.fetch(f"INSERT INTO `group22`.`credit_cards` (`Number`, `CCV`, `Expire_Date`, `PayerID`,  `Valid`, `CustomerEmail`) VALUES ('{Number}', '{CCV}', '{Expire_Date}', '{PayerID}', '{Valid}', '{CustomerEmail}'); ")
