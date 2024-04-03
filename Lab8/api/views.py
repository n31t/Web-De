import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

from api.models import Category, Product


@csrf_exempt
def product_list(request):
    if (request.method == "GET"):
        products = Product.objects.all()
        products_json = [products.to_json() for product in products]
        return JsonResponse(products_json, safe=False)
    elif (request.method == "POST"):
        data = json.loads(request.body)
        try:
            product = Product.objects.create(name=data['name'], price=data['price'],
                                             description=data['description'], count=data['count'],
                                             category_id=data['category_id'])
        except Exception as e:
            return JsonResponse({'error': str(e)})
        return JsonResponse(product.to_json())


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        return JsonResponse(product.to_json())


@csrf_exempt
def category_list(request):
    if (request.method == "GET"):
        categories = Category.objects.all()
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            category = Category.objects.create(name=data["name"])
        except Exception as e:
            return JsonResponse({'error': str(e)})
        return JsonResponse(category.to_json())


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        return JsonResponse(category.to_json())


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if (request.method == "GET"):
        products_json = [p.to_json() for p in category.products.all()]
        return JsonResponse(products_json, safe=False)
