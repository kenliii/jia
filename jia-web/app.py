from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/supper-club')
def supper_club():
    return render_template('supper-club.html')

@app.route('/reservations')
def reservations():
    return render_template('reservations.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/private')
def private():
    return render_template('private.html')

@app.route('/faqs')
def faqs():
    return render_template('faqs.html')

if __name__ == '__main__':
    app.run(debug=True)
