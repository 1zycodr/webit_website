from django import forms
from .models import Order

class OrderForm(forms.ModelForm):
    
    class Meta:
        model=Order
        fields=('order_number','order_title','order_email','order_info','order_content')
    
        widgets = {
                'order_title': forms.TextInput(attrs={'class': 'name'}),
                'order_number': forms.TextInput(attrs={'id':'phone', 'class': 'number'}),
                'order_email': forms.TextInput(attrs={'class': 'post_office'}),
                'order_info': forms.TextInput(attrs={'class': 'what_to_develop'}),

                'order_content': forms.Textarea(attrs={'class': 'textarea', 'minlength': '20', 'maxlength':'250', 'cols':'40', 'rows':'5', 'name':'massage'  }),

            }
            
