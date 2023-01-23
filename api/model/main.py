import random
from model.ressourcesHelper import path_quotes, path_reddit,path_youtube

def test(un:int,deux:int):
    return un+deux
def essai(un:int,deux:int):
    return un*deux

def getQuotes():
    lines = open(path_quotes).read().splitlines()
    res:str = random.choice(lines)
    return res
    

def getRedditPost():
    lines = open(path_reddit).read().splitlines()
    res:str = random.choice(lines)
    return res

def getYoutubeVideo():
    lines = open(path_youtube).read().splitlines()
    res:str = random.choice(lines)
    return res


def createPost():
    #random type from text, image, video
    test = random.randint(0,100)
    if test <73:
        return {
            "type":"text",
            "field":getQuotes()
        }
    elif test > 73 and test < 95:
        return {
            "type":"reddit",
            "field": getRedditPost()
        }
    elif test > 95 :
        return {
            "type":"youtube",
            "field": getYoutubeVideo()
        }
    return {
        "type":"text",
        "field":"joli site"
    }