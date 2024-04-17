from django.http import HttpResponse
from django.core import serializers
from django.views import View
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


from django.http import JsonResponse


class CompaniesView(APIView):
    def get(self, request, pk=None):
        if pk:
            companies = Company.objects.filter(id=pk)
        else:
            companies = Company.objects.all()

        data = CompanySerializer(companies, many=True).data
        return Response(data)

    def post(self, request):
        data = request.data
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class VacanciesView(View):
    def get(self, request, pk=None):
        if pk:
            vacancies = Vacancy.objects.filter(id=pk)
        else:
            vacancies = Vacancy.objects.all()

        data = VacancySerializer(vacancies, many=True).data
        return HttpResponse(data, content_type='application/json', status=200)


class VacanciesCompanyView(APIView):
    def get(self, request, pk_c):
        vacancies = Vacancy.objects.filter(company_id=pk_c)
        data = VacancySerializer(vacancies, many=True).data
        return Response(data)


def get_top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        data = serializers.serialize("json", vacancies)

        return HttpResponse(data, content_type='application/json', status=200)
