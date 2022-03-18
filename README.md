# README
# 環境構築手順

( *dockerは入っている前提です。* 入ってない場合はダウンロード →https://www.docker.com/)

$ git clone  
↓  
$ docker-compose build 　                  # コンテナをビルド  
↓  
$ docker-compose -d up   　　　　　　　　　　 # コンテナの一斉起動  
↓  
$ docker-compose run app composer install  
↓  
$ docker-compose run app php artisan migrate　# マイグレーション

# 参考にしたサイト

https://qiita.com/ucan-lab/items/56c9dc3cf2e6762672f4  
https://awesome-linus.com/2019/06/03/laravel-tutorial-routing/  
https://qiita.com/kashimuuuuu/items/b5f35057dfe1980d053a  
https://qiita.com/MasakiFukunishi/items/861e21877d5333768847
https://nochio12.hatenablog.com/entry/2020/10/03/215718

# URL  
http://127.0.0.1:8080/
