#include <nan.h>

#ifndef _WIN32
#include <unistd.h>
#endif

using namespace v8;

NAN_METHOD(Delay) {
  int time = args[0]->IntegerValue(); //milliseconds
  Local<Function> callback = args[1].As<Function>();

  #ifdef _WIN32
  Sleep(time);
  #else
  usleep(time * 1000);
  #endif

  NanMakeCallback(NanGetCurrentContext()->Global(), callback, 0, NULL);

  NanReturnUndefined();
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("delay"), NanNew<FunctionTemplate>(Delay)->GetFunction());
}

NODE_MODULE(myaddon, Init);
