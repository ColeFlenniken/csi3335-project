import os

from app import csi3335sp2023

basedir = os.path.abspath(os.path.dirname(__file__))



class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://%s:%s@%s/%s" % (csi3335sp2023.mysql["user"], csi3335sp2023.mysql["password"], csi3335sp2023.mysql["location"], csi3335sp2023.mysql["database"])
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
    #                           'sqlite:///' + os.path.join(basedir, 'app.db')