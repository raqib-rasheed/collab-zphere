from rest_framework.permissions import BasePermission

class IsUserOwnerOfObject(BasePermission):
    def has_object_permission(self, request, view, obj):
        
        if request.user == obj.workspace.user:
            return True
        else:
            return False