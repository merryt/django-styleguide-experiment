from django import template

register = template.Library()

@register.inclusion_tag('templatetags/_basic_button.html')
def button(text="Click Here"):
	return { 'button_text': text }
