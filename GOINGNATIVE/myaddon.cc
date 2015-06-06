#include <nan.h>
#include "iostream"

using namespace v8;

NAN_METHOD(Length) {
  NanScope();

  Local<String> str = args[0].As<String>();
  int len = strlen(*String::Utf8Value(str));

  NanReturnValue(NanNew<Number>(len));
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("length"), NanNew<FunctionTemplate>(Length)->GetFunction());
}

NODE_MODULE(myaddon, Init);
