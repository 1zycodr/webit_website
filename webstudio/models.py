from django.conf import settings
from django.db import models
from django.utils import timezone

class Works(models.Model):
    work_photo_main=models.ImageField(null=True)
    work_photo_2=models.ImageField(null=True)
    work_photo_3=models.ImageField(null=True)
    work_title=models.CharField(max_length=200,null=True)
    work_info=models.TextField(null=True)
    work_address=models.CharField(max_length=300,null=True,default='https://')
    def __str__(self):
        return self.work_title
    

class Order(models.Model):
    order_email=models.CharField(max_length=200,null=True)
    order_title=models.CharField(max_length=200,null=True)
    order_number=models.CharField(max_length=200,null=True)
    order_name=models.CharField(max_length=200,null=True)
    order_info=models.TextField(null=True)
    order_content=models.TextField(null=True)
    order_date=models.DateTimeField(null=True,blank=True)

    def send(self):
        self.order_date=timezone.now()
        self.save()

    def __str__(self):
        return self.order_title

class Employee(models.Model):
    employee_photo=models.ImageField(null=True)
    employee_fullname=models.CharField(max_length=300,default='')
    employee_specialization=models.CharField(max_length=300,default='')
    employee_email=models.EmailField(max_length=300,default='example@mail.com')
    employee_info=models.TextField(null=True)
    
    def __str__(self):
        return self.employee_fullname
# Create your models here.
