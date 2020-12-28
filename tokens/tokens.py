import codecs, json, os

#1) Mova os tokens para uma pasta dentro da pasta FoundryVTT/Data
#2) Copie o arquivo ameacas.db (pasta modules/tormenta20-compendium/packs) para a mesma pasta dos tokens
#3) Defina o CAMINHO dos tokens
#4) Execute o programa
CAMINHO = "tokens/Tokens Tormenta 20/"

output = []
with codecs.open("ameacas.db", "r", "utf8") as file:
    output = ""
    for line in file:
        a = json.loads(line)
        nome = a["name"]
        if (os.path.isfile(nome + ".png")):
            img = CAMINHO + nome + ".png"
            a["img"] = img
            a["token"]["img"] = img
            output += str(a) + "\n"
        else:
            output += str(a) + "\n"

output = output.replace("'", "\"").replace("None", "null").replace("True","true").replace("False","false").replace(": {",":{").replace("\": ","\":").replace(", \"",",\"")
with codecs.open("ameacas2.db", "w", "utf8") as ofile:
    ofile.write(output)
