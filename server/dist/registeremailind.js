"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.RegisterEmailInd = void 0;
var _components = require("@react-email/components");
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
var RegisterEmailInd = (exports.RegisterEmailInd = function RegisterEmailInd(
  _ref
) {
  var firstNameInd = _ref.firstNameInd,
    lastNameInd = _ref.lastNameInd,
    emailInd = _ref.emailInd,
    phoneInd = _ref.phoneInd,
    eventDropDownInd = _ref.eventDropDownInd,
    specialtyInd = _ref.specialtyInd,
    practiceInd = _ref.practiceInd,
    practiceAddressInd = _ref.practiceAddressInd,
    companyInd = _ref.companyInd,
    shirtSizeInd = _ref.shirtSizeInd;
  return /*#__PURE__*/ React.createElement(
    _components.Html,
    null,
    /*#__PURE__*/ React.createElement(
      _components.Heading,
      {
        style: acbcHeading,
      },
      eventDropDownInd,
      " Individual Registrant"
    ),
    /*#__PURE__*/ React.createElement(
      _components.Preview,
      null,
      "You have a new ",
      eventDropDownInd,
      " individual registrant"
    ),
    /*#__PURE__*/ React.createElement(
      _components.Body,
      {
        style: main,
      },
      /*#__PURE__*/ React.createElement(
        _components.Container,
        {
          style: container,
        },
        /*#__PURE__*/ React.createElement(
          _components.Section,
          {
            style: box,
          },
          /*#__PURE__*/ React.createElement(_components.Hr, {
            style: hr,
          }),
          /*#__PURE__*/ React.createElement(
            _components.Text,
            {
              style: paragraph2,
            },
            "Their Register Information:"
          ),
          /*#__PURE__*/ React.createElement(
            _components.Container,
            {
              style: messageContainer,
            },
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Event: ",
              eventDropDownInd
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph,
              },
              "First Name: ",
              firstNameInd,
              " ",
              /*#__PURE__*/ React.createElement("br", null),
              "Last Name: ",
              lastNameInd
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Email: ",
              emailInd
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Phone: ",
              phoneInd ? phoneInd : "No phone number was provided"
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Address:",
              " ",
              practiceAddressInd
                ? practiceAddressInd
                : "No address was provided"
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Specialty:",
              specialtyInd
                ? specialtyInd
                : "No specialty field was number provided"
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Position:",
              " ",
              practiceInd ? practiceInd : "No practice field was provided"
            ),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Company Name:",
              " ",
              companyInd ? companyInd : "No company name was provided"
            ),
            /*#__PURE__*/ React.createElement(_components.Hr, {
              style: hr,
            }),
            /*#__PURE__*/ React.createElement(
              _components.Text,
              {
                style: paragraph2,
              },
              "Shirt Size:",
              " ",
              shirtSizeInd ? shirtSizeInd : "No shirt size was provided"
            )
          ),
          /*#__PURE__*/ React.createElement(
            _components.Text,
            {
              style: paragraph,
            },
            "\u2014 Access Bootcamp Website"
          ),
          /*#__PURE__*/ React.createElement(_components.Hr, {
            style: hr,
          }),
          /*#__PURE__*/ React.createElement(
            _components.Text,
            {
              style: footer,
            },
            "Data was taken from your Access Bootcamp Website, Subscribe contact form."
          )
        )
      )
    )
  );
});
var _default = (exports["default"] = RegisterEmailInd);
var main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
var container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};
var acbcHeading = {
  color: "black",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0",
};
var messageContainer = {
  backgroundColor: "#e4e2e2",
  border: "1px solid #eee",
  borderRadius: "5px",
  margin: "0 auto",
  padding: "4px",
  height: "20px",
  fontStyle: "italic",
};
var box = {
  padding: "0 48px",
};
var hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};
var paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};
var paragraph2 = {
  color: "#525f7f",
  margin: "0",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};
var anchor = {
  color: "#556cd6",
};
var button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};
var footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
