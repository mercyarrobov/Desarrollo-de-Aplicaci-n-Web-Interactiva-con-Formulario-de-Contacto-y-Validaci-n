#Importamos las librerias necesarias para poder realizar el aplicativo web
import os
from flask import Flask, render_template
#Importamos las librerias necesarias para poder realizar el aplicativo web
app = Flask(__name__, template_folder='templates/layouts')
#recuperar nombres de ruta
app._static_folder = os.path.abspath("templates/static/")
#Controlador de la ruta inicial
@app.route('/')
#Función que redirige la página principal
def index():
    #Función que redirige la página principal
    return render_template('index.html')
#Main de la app
if __name__ == '__main__':
    #evitar reinicios excesivos del servidor
    app.run(debug=True)