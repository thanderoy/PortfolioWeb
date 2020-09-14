from django.shortcuts import render

from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string

# Create your views here.
def index(request):
    return render(request, 'P_App/index.html')

def sendEmail(request):
    
    if request.method == 'POST':

        template = render_to_string('P_App/email_template.html', {
            'username': request.POST['username'],
            'email': request.POST['email'],
            'message': request.POST['message'],
        })

        email = EmailMessage(
            request.POST['subject'],
            template,
            settings.EMAIL_HOST_USER,
            ['roy.thande@gmail.com']
        )

        email.fail_silently = False
        email.send()

    return render(request, 'P_App/email_sent.html')