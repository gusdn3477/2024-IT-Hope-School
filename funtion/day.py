from json_util.json_io import dict_to_json_file,json_file_to_dict
import funtion.stock as stock

def sleep(userId) :

    userData = json_file_to_dict()
    userData[userId]['stamina'] = 100
    userData[userId]['day'] += 1

    stock.change_stock(userId)
    dict_to_json_file(userData)

    return {
        "success": True,
        "data" : userData[userId]
    } 