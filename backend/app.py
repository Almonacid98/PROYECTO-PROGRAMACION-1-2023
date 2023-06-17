from main import create_app
import os

app = create_app()
app.app_context().push()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=os.getenv("PORT"), debug=True) #al poner el host en 0.0.0.0 recibe de todos los puertos e ip disponibles
