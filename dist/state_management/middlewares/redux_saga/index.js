"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _actions = require("../../actions");

var _constants = require("../../constants");

var _sign_up = require("../../../API/sign_up");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(handleSignUp),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(onSignUpSuccess),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(watchActions),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(rootSaga);

function handleSignUp(action) {
  var _token;

  return regeneratorRuntime.wrap(function handleSignUp$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_sign_up.signUp, action.payload);

        case 3:
          _token = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _actions.signUpSuccess)(_token));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return (0, _effects.put)((0, _actions.signUpFailed)());

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function onSignUpSuccess(action) {
  return regeneratorRuntime.wrap(function onSignUpSuccess$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.call)(_sign_up.dummyRequest, action.token);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function watchActions() {
  return regeneratorRuntime.wrap(function watchActions$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_constants.SIGN_UP, handleSignUp);

        case 2:
          _context3.next = 4;
          return (0, _effects.takeEvery)(_constants.SIGN_UP_SUCCESS, onSignUpSuccess);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.all)([watchActions()]);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0ZV9tYW5hZ2VtZW50L21pZGRsZXdhcmVzL3JlZHV4X3NhZ2EvaW5kZXgudHMiXSwibmFtZXMiOlsiaGFuZGxlU2lnblVwIiwib25TaWduVXBTdWNjZXNzIiwid2F0Y2hBY3Rpb25zIiwicm9vdFNhZ2EiLCJhY3Rpb24iLCJzaWduVXAiLCJwYXlsb2FkIiwidG9rZW4iLCJkdW1teVJlcXVlc3QiLCJTSUdOX1VQIiwiU0lHTl9VUF9TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBTUE7O0FBQ0E7O0FBS0E7Ozs7d0JBaUJVQSxZOzs7d0JBU0FDLGU7Ozt3QkFJQUMsWTs7O3dCQUtlQyxROztBQWxCekIsU0FBVUgsWUFBVixDQUF1QkksTUFBdkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFMEIsaUJBQU0sbUJBQUtDLGVBQUwsRUFBYUQsTUFBTSxDQUFDRSxPQUFwQixDQUFOOztBQUYxQjtBQUVVQyxVQUFBQSxNQUZWO0FBQUE7QUFHSSxpQkFBTSxrQkFBSSw0QkFBY0EsTUFBZCxDQUFKLENBQU47O0FBSEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0ksaUJBQU0sa0JBQUksNEJBQUosQ0FBTjs7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxTQUFVTixlQUFWLENBQTBCRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTSxtQkFBS0kscUJBQUwsRUFBbUJKLE1BQU0sQ0FBQ0csS0FBMUIsQ0FBTjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNLHdCQUFVTyxrQkFBVixFQUFtQlQsWUFBbkIsQ0FBTjs7QUFERjtBQUFBO0FBRUUsaUJBQU0sd0JBQVVVLDBCQUFWLEVBQTJCVCxlQUEzQixDQUFOOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVFLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU0sa0JBQUksQ0FDTkQsWUFBWSxFQUROLENBQUosQ0FBTjs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNhbGwsXG4gIHB1dCxcbiAgdGFrZUV2ZXJ5LFxuICBhbGxcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IHNpZ25VcEZhaWxlZCwgc2lnblVwU3VjY2VzcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgU0lHTl9VUCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHNpZ25VcCwgZHVtbXlSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vQVBJL3NpZ25fdXAnO1xuXG50eXBlIHNpZ25VcERhdGEgPSB7XG4gIGVtYWlsOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn07XG5cbnR5cGUgU2lnblVwQWN0aW9uID0ge1xuICB0eXBlOiBzdHJpbmcsXG4gIHBheWxvYWQ6IHNpZ25VcERhdGFcbn07XG5cbnR5cGUgU2lnblVwU3VjY2Vzc0FjdGlvbiA9IHtcbiAgdHlwZTogc3RyaW5nLFxuICB0b2tlbjogc3RyaW5nXG59O1xuXG5mdW5jdGlvbiogaGFuZGxlU2lnblVwKGFjdGlvbjogU2lnblVwQWN0aW9uKToge30ge1xuICB0cnkge1xuICAgIGNvbnN0IHRva2VuOiBzdHJpbmcgPSB5aWVsZCBjYWxsKHNpZ25VcCwgYWN0aW9uLnBheWxvYWQpO1xuICAgIHlpZWxkIHB1dChzaWduVXBTdWNjZXNzKHRva2VuKSk7XG4gIH0gY2F0Y2gge1xuICAgIHlpZWxkIHB1dChzaWduVXBGYWlsZWQoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG9uU2lnblVwU3VjY2VzcyhhY3Rpb246IFNpZ25VcFN1Y2Nlc3NBY3Rpb24pOiB7fSB7XG4gIHlpZWxkIGNhbGwoZHVtbXlSZXF1ZXN0LCBhY3Rpb24udG9rZW4pO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hBY3Rpb25zKCk6IHt9IHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05fVVAsIGhhbmRsZVNpZ25VcCk7XG4gIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1NVQ0NFU1MsIG9uU2lnblVwU3VjY2Vzcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpOiB7fSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgd2F0Y2hBY3Rpb25zKClcbiAgICBdKTtcbn1cbiJdfQ==