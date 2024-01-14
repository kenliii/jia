from flask import Flask, render_template, redirect, url_for, request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/supper-club')
def supper_club():
    return render_template('supper-club.html', active_page='supper-club')

@app.route('/reservations')
def reservations():
    return render_template('reservations.html', active_page='reservations')

@app.route('/team')
def team():
    return render_template('team.html', active_page='team')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html', active_page='gallery')

@app.route('/private')
def private():
    return render_template('private.html', active_page='private')

@app.route('/faqs')
def faqs():
    return render_template('faqs.html', active_page='faqs')

@app.route('/date')
def date():
    return render_template('date.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    # Process the form data here
    # ...
    return redirect(url_for('thank_you'))

@app.route('/thankyou')
def thank_you():
    # Render your thank_you.html template
    return render_template('thankyou.html')


if __name__ == '__main__':
    app.run(debug=True)
