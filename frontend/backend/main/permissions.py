from rest_framework.permissions import BasePermission
# from rest_framework_api_key.permissions import BaseHasAPIKey
# from rest_framework_api_key.models import APIKey

# class HasAPIKey(BaseHasAPIKey):
#     model = APIKey

#     def has_permission(self, request, view):
#         is_key_valid = super().has_permission(request, view)
#         key = self.get_key(request)
#         api_key_obj = APIKey.objects.get_from_key(key)

class IsUserOwnerOfObject(BasePermission):
    def has_object_permission(self, request, view, obj):
        
        if request.user == obj.workspace.user:
            return True
        else:
            return False