cd ~/tst/attack/real-word-ctf/WEB/ChatUWU-attack/
docker-compose down
cd ~/tst
rm -rf attack
git clone https://github.com/skabdulhaq/real-word-ctf.git attack
cd attack
git checkout attack
cd WEB
mv ChatUWU/ ChatUWU-attack/
cd ChatUWU-attack
docker-compose up -d