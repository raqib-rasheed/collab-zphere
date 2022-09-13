from rest_framework.authentication import TokenAuthentication


class TokenAuthParamBased(TokenAuthentication):
    def authenticate(self, request):
        if 'auth_token' in request.query_params and \
                'HTTP_AUTHORIZATION' not in request.META:
            return self.authenticate_credentials(request.query_params.get('auth_token'))
        elif request.headers.get("Authorization"):
            token = request.headers.get("Authorization").split(" ")
            if len(token) > 1:
                return self.authenticate_credentials(token[1])
            else:
                return self.authenticate_credentials(token[0])
        else:
            return super(TokenAuthParamBased, self).authenticate(request)
