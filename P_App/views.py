from django.shortcuts import render

from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string

from datetime import datetime

# datetime object containing current date and time
now = datetime.now()

dt_string = now.strftime("%B %d, %Y %H:%M")

# Create your views here.
def index(request):
    return render(request, 'P_App/index.html')

def sendEmail(request):
    
    if request.method == 'POST':

        template = render_to_string('P_App/email_template.html', {
            'subject': request.POST['subject'],
            'username': request.POST['username'],
            'email': request.POST['email'],
            'message': request.POST['message'],
            'dt_string': dt_string
        })

        email = EmailMessage(
            request.POST['subject'],
            template,
            settings.EMAIL_HOST_USER,
            ['roy.thande@gmail.com']
        )

        email.fail_silently = False
        email.content_subtype = 'html'
        email.send()

    return render(request, 'P_App/email_sent.html')