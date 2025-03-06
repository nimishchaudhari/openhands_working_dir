from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

jobs = [
    {
        'id': 1,
        'title': 'Software Engineer',
        'company': 'Google',
        'location': 'Mountain View, CA',
        'description': 'Develop and maintain software applications.'
    },
    {
        'id': 2,
        'title': 'Data Scientist',
        'company': 'Facebook',
        'location': 'Menlo Park, CA',
        'description': 'Analyze data and build machine learning models.'
    }
]

@app.route('/')
def index():
    return render_template('index.html', jobs=jobs)

@app.route('/job/<int:job_id>')
def job(job_id):
    job = next((job for job in jobs if job['id'] == job_id), None)
    if job:
        return render_template('job.html', job=job)
    else:
        return 'Job not found'

@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        title = request.form['title']
        company = request.form['company']
        location = request.form['location']
        description = request.form['description']
        job_id = len(jobs) + 1
        new_job = {
            'id': job_id,
            'title': title,
            'company': company,
            'location': location,
            'description': description
        }
        jobs.append(new_job)
        return redirect(url_for('index'))
    else:
        return render_template('add.html')

if __name__ == '__main__':
    app.run(debug=True)
