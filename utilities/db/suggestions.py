from calendar import month
from utilities.db.db_manager import dbManager
from datetime import datetime


class Suggestion:
    @staticmethod
    def post_suggestion(custEmail, base, tooping):
        return dbManager.commit(
            f"INSERT INTO `group22`.`suggestions` (`custEmail`, `base`, `tooping`) VALUES ('{custEmail}','{base}','{tooping}')")


    @staticmethod
    def get_suggestions():
        month = datetime.now().month - 1
        return dbManager.fetch(f"select * from `group22`.`suggestions` where Month(sub_date) = {month}")
    
    @staticmethod
    def update_votes(sug_id, new_votes):
        return dbManager.commit(f"UPDATE `group22`.`suggestions` SET `votes` = '{new_votes}' WHERE `id` = '{sug_id}'")

    @staticmethod
    def get_votes(sug_id):
        return dbManager.fetch(f"select votes from `group22`.`suggestions` where `id` = '{sug_id}'")
