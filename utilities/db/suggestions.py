from calendar import month
from utilities.db.db_manager import dbManager
from datetime import datetime


class Suggestion:
    @staticmethod
    def post_suggestion(custEmail, base, tooping, text):
        return dbManager.commit(
            f"INSERT INTO `group22`.`suggestions` (`custEmail`, `base`, `tooping`, `text`) VALUES ('{custEmail}','{base}','{tooping}','{text}')")


    @staticmethod
    def get_suggestions():
        month = datetime.now().month - 1
        return dbManager.commit(f"select * from `group22`.`suggestions` where Month(sub_date) = {month}")

