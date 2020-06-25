webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./components/loanApplicationForm.js":
/*!*******************************************!*\
  !*** ./components/loanApplicationForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spring/renderprops.cjs */ "./node_modules/react-spring/renderprops.cjs.js");
/* harmony import */ var react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/styles/withStyles */ "./node_modules/@material-ui/styles/esm/withStyles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "./node_modules/@material-ui/core/esm/FormGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/StepIcon */ "./node_modules/@material-ui/core/esm/StepIcon/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/icons/NotificationsActive */ "./node_modules/@material-ui/icons/NotificationsActive.js");
/* harmony import */ var _material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @material-ui/icons/AccountBox */ "./node_modules/@material-ui/icons/AccountBox.js");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @material-ui/icons/SupervisedUserCircle */ "./node_modules/@material-ui/icons/SupervisedUserCircle.js");
/* harmony import */ var _material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _common_Back__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common/Back */ "./components/common/Back.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _components_questions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../components/questions */ "./components/questions.js");
/* harmony import */ var _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../utils/axios.service */ "./utils/axios.service.js");
/* harmony import */ var _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./data/saudi_regions_lite.json */ "./components/data/saudi_regions_lite.json");
var _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/saudi_regions_lite.json */ "./components/data/saudi_regions_lite.json", 1);
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @material-ui/core/colors/indigo */ "./node_modules/@material-ui/core/colors/indigo.js");
/* harmony import */ var _material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_indigo__WEBPACK_IMPORTED_MODULE_46__);








var _jsxFileName = "C:\\Users\\user\\Documents\\GitHub\\Lendpop\\components\\loanApplicationForm.js",
    _this3 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





































 // import Paystack from '../utils/axios.paystack';




var AnimatedGrid = Object(react_spring__WEBPACK_IMPORTED_MODULE_11__["animated"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"]);
_c = AnimatedGrid;

var localStorage = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");

var backgroundShape = __webpack_require__(/*! ../public/images/shape.svg */ "./public/images/shape.svg");

numeral__WEBPACK_IMPORTED_MODULE_42___default.a.defaultFormat("0,000");

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.primary["A100"],
      overflow: "hidden",
      backgroundSize: "cover",
      backgroundPosition: "0 400px",
      marginTop: 10,
      padding: '20 0',
      width: "100%"
    },
    grid: {
      margin: 0
    },
    smallContainer: {
      width: "100%"
    },
    bigContainer: {
      width: "100%"
    },
    stepContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stepGrid: {
      width: "80%"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    outlinedButtom: {
      textTransform: "uppercase",
      margin: theme.spacing(1)
    },
    stepper: {
      backgroundColor: "transparent",
      "@media screen and (max-width: 600px)": {
        display: "none"
      }
    },
    title: {
      fontSize: "1rem",
      flexGrow: 0,
      textAlign: 'left',
      color: theme.palette.primary.main
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      borderRadius: '10px',
      width: '100%'
    },
    successPaper: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: 'space-around'
    },
    successText: {
      margin: '5px 0',
      color: 'white'
    },
    formPaper: {
      margin: 0
    },
    formLabel: {
      padding: 8,
      fontSize: '1.2rem',
      color: theme.palette.primary.main
    },
    formSubLabel: {
      padding: 8,
      fontSize: '1rem'
    },
    formCaption: {
      padding: 8,
      fontSize: '1rem'
    },
    fixedHeight: {
      height: 250
    },
    topInfo: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 42
    },
    formControl: {
      width: "100%",
      '& .MuiTextField-root': {
        width: "100%"
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    borderColumn: {
      borderBottom: "1px solid ".concat(theme.palette.grey["100"]),
      paddingBottom: 24,
      marginBottom: 24
    },
    buttonProgress: {
      color: theme.palette.primary.main // position: 'absolute',
      // top: '50%',
      // left: '50%',
      // marginTop: -12,
      // marginLeft: -12,

    },
    flexBar: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center",
      alignSelf: "flex-end",
      width: '40%',
      "@media screen and (max-width: 600px)": {
        marginRight: '15px'
      }
    }
  };
};

var CustomStepIcon = Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])({
  text: {
    display: 'none'
  }
})(_material_ui_core_StepIcon__WEBPACK_IMPORTED_MODULE_28__["default"]);

var getSteps = function getSteps() {
  return ["INSTRUCTIONS", "PERSONAL INFO", "DEMOGRAPHICS", "ELIGIBILITY", "AGREEMENT", "OTHER INFO", "COMPLETE"];
};

var banks = ['The National Commercial Bank', 'The Saudi British Bank', 'Saudi Investment Bank', 'alinma bank', 'Banque Saudi Fransi', 'Riyad Bank', 'Samba Financial Group (Samba)', 'alawwal bank', 'Al Rajhi Bank', 'Arab National Bank', 'Bank AlBilad', 'Bank AlJazira', 'Gulf International Bank Saudi Aribia (GIB-SA)'];

var LoanApplicationForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(LoanApplicationForm, _Component);

  var _super = _createSuper(LoanApplicationForm);

  function LoanApplicationForm() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanApplicationForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      loading: false,
      activeStep: 0,
      termsChecked: false,
      conditionsChecked: false,
      labelWidth: 0,
      description: '',
      firstName: _this.props.firstName,
      lastName: _this.props.data.last_name,
      NationalIdNo: _this.props.data.national_id ? _this.props.data.national_id : '',
      dob: _this.props.data.dob ? _this.props.data.dob : '',
      email: _this.props.email,
      mobile: _this.props.data.mobile ? _this.props.data.mobile : '',
      address: _this.props.data.address ? _this.props.data.address : '',
      region: '',
      gender: _this.props.data.gender ? _this.props.data.gender : '',
      education: '',
      ethnicity: '',
      employeeReference: _this.props.data.employee_reference ? _this.props.data.employee_reference : '',
      employeeNumber: _this.props.data.employee_number ? _this.props.data.employee_number : '',
      salary: _this.props.data.salary ? _this.props.data.salary : '',
      questions: '',
      mobileCheck: false,
      addressCheck: false,
      gracePeriod: '',
      hascreditScore: false,
      creditScore: '',
      repaymentPlan: '',
      bankName: _this.props.data.bank ? _this.props.data.bank : '',
      accountNumber: _this.props.data.account_number ? _this.props.data.account_number : '',
      banks: banks,
      cardNumber: '',
      cvv: '',
      expDate: new Date(),
      files: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleNext", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep + 1
        };
      });

      var data = _objectSpread({}, _this.state);

      delete data.banks;
      delete data.files;
      delete data.loading;
      delete data.cardNumber;
      delete data.cvv;
      delete data.expDate;

      if (data.activeStep < 4) {
        localStorage('formstate', JSON.stringify(data));
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleBack", function () {
      _this.setState(function (state) {
        return {
          activeStep: state.activeStep - 1
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleReset", function () {
      _this.setState({
        activeStep: 0
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleTerms", function (event) {
      var _this$setState2;

      _this.setState((_this$setState2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState2, event.target.name, event.target.checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$setState2, "loading", false), _this$setState2));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "goToDashboard", function (event) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.reload();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getCity", function (id) {
      return cities.filter(function (city) {
        return city.region_id === id;
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (event) {
      event.preventDefault();

      if (_this.state.activeStep !== 4 && _this.state.activeStep !== 6) {
        return _this.handleNext();
      }

      if (_this.state.activeStep === 6) {
        return _this.goToDashboard();
      }

      if (_this.state.activeStep === 4) {
        _this.setState({
          loading: true
        });

        var kycForm = {
          first_name: _this.state.firstName,
          last_name: _this.state.lastName,
          email: _this.state.email,
          national_id: _this.state.NationalIdNo,
          salary: _this.state.salary,
          employee_reference: _this.state.employeeReference,
          employee_number: _this.state.employeeNumber,
          gender: _this.state.gender,
          bank: _this.state.bankName ? _this.state.bankName : 'Dummy Data',
          mobile: _this.state.mobile,
          dob: _this.state.dob,
          tenure: _this.props.data.tenure,
          initial_amount: _this.props.data.initial_amount,
          address: _this.state.address,
          account_number: _this.state.accountNumber ? _this.state.accountNumber : '1234567890',
          pan: _this.state.cardNumber,
          cvv: _this.state.cvv,
          exp_date: _this.state.expDate
        };
        _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].kycUpdate(JSON.stringify(kycForm)).then(function (response) {
          return response.data.data;
        }).then(function (data) {
          var apiData = {
            "email": data.email,
            "amount": data.initial_amount,
            "loan_cos": "1",
            "tenure": data.tenure
          };
          return apiData;
        }).then(function (data) {
          return _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].loanApplication(JSON.stringify(data));
        }).then(function (response) {
          _this.setState({
            description: response.data.description
          });

          if (_this.state.files.length) {
            var formData = new FormData();
            var keys = ["national_id", 'statement', 'contract', 'payslip'];

            for (var i = 0; i < _this.state.files.length; i++) {
              formData.append(keys[i], _this.state.files[i], _this.state.files[i].name);
            }

            formData.append('loan_id', response.data.data.id);
            console.log('uploading files...');
            _utils_axios_service__WEBPACK_IMPORTED_MODULE_44__["default"].docUpload(formData).then(function (response) {
              return response;
            })["catch"](function (error) {
              console.log(error.response);
            });
          } else {
            return response;
          }
        }).then(function (response) {
          _this.setState({
            loading: false
          });

          _this.clear();

          _this.handleNext();
        })["catch"](function (error) {
          console.log(error.response);
          return _this.setState({
            loading: false
          });
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanApplicationForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if (this.source) {
      //       this.source.cancel('Cancel previous request');
      //   }
      // this.source = Paystack.source()
      // Paystack.banks({ cancelToken: this.source.token }).then(response => {
      //   this.setState({banks: response.data.data})
      // }).catch(error => console.log(error))
      var formData = JSON.parse(localStorage('formstate'));

      if (formData) {
        this.setState(_objectSpread({}, formData));
      }

      ;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// return this.source.cancel('paystack request canceled')
    }
  }, {
    key: "stepActions",
    value: function stepActions() {
      if (this.state.activeStep === 4) {
        return "Accept";
      }

      if (this.state.activeStep === 3) {
        return "Submit";
      }

      if (this.state.activeStep === 6) {
        return "Done";
      }

      return "Next";
    }
  }, {
    key: "handleSave",
    value: function handleSave(files) {
      this.setState({
        files: files
      });
    }
  }, {
    key: "handleDateChange",
    value: function handleDateChange(event) {
      var expDate = new Date(event);
      console.log(expDate);
      this.setState({
        expDate: expDate
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var edulist = ['None', 'Primary', 'Secondary', 'Diploma', 'Bachelors', 'Masters', 'Doctorate'];
      var handleChange = this.handleChange;
      var handleTerms = this.handleTerms;
      var goToDashboard = this.goToDashboard.bind(this);
      var classes = this.props.classes;
      var steps = getSteps();
      var _this$state = this.state,
          activeStep = _this$state.activeStep,
          firstName = _this$state.firstName,
          loading = _this$state.loading,
          termsChecked = _this$state.termsChecked,
          conditionsChecked = _this$state.conditionsChecked;
      var fixedHeightPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.paper, classes.fixedHeight);
      var successPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.paper, classes.successPaper);

      var Label = __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
        variant: "caption",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 19
        }
      }, "PLEASE CLICK TO AGREE TO THE TERMS AND CONDITIONS");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        container: true,
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        alignItems: "center",
        justify: "center",
        container: true,
        className: classes.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: classes.stepContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: classes.bigContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 19
        }
      }, __jsx(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_18__["default"], {
        classes: {
          root: classes.stepper
        },
        activeStep: activeStep,
        alternativeLabel: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 21
        }
      }, steps.map(function (label) {
        return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421,
            columnNumber: 27
          }
        }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
          StepIconComponent: CustomStepIcon,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422,
            columnNumber: 29
          }
        }, label));
      }))), __jsx("form", {
        className: classes.formControl,
        onSubmit: this.submit,
        validate: "true",
        autoComplete: "off",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 19
        }
      }, activeStep === 0 && __jsx(Form0, {
        fixedHeightPaper: fixedHeightPaper,
        classes: classes,
        firstName: firstName,
        Label: Label,
        termsChecked: termsChecked,
        handleChange: handleChange,
        handleTerms: handleTerms,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 23
        }
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 1,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 1 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 447,
              columnNumber: 25
            }
          }, __jsx(Form1, {
            classes: classes,
            handleTerms: handleTerms,
            handleChange: handleChange,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 448,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 2,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 2 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 464,
              columnNumber: 25
            }
          }, __jsx(Form2, {
            classes: classes,
            handleTerms: handleTerms,
            handleChange: handleChange,
            edulist: edulist,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 3,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 3 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 482,
              columnNumber: 25
            }
          }, __jsx(Form3, {
            classes: classes,
            banks: banks,
            handleSave: _this2.handleSave.bind(_this2),
            handleChange: handleChange,
            handleDateChange: _this2.handleDateChange.bind(_this2),
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 4,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 4 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 25
            }
          }, __jsx(Form4, {
            classes: classes,
            handleTerms: handleTerms,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 502,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 5,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 5 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 25
            }
          }, __jsx(Form5, {
            classes: classes,
            handleChange: handleChange,
            successPaper: successPaper,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 518,
              columnNumber: 27
            }
          }));
        };
      }), __jsx(react_spring_renderprops_cjs__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
        items: activeStep === 6,
        initial: null,
        from: {
          opacity: 0,
          transform: 'translate3d(40px,0,0)'
        },
        enter: {
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        },
        leave: {
          opacity: 0,
          transform: 'translate3d(-40px,0,0)',
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526,
          columnNumber: 21
        }
      }, function (items) {
        return activeStep === 6 && function (props) {
          return __jsx(AnimatedGrid, {
            style: props,
            item: true,
            xs: 12,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 25
            }
          }, __jsx(Form6, {
            classes: classes,
            dash: goToDashboard,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 535,
              columnNumber: 27
            }
          }));
        };
      }), __jsx("div", {
        className: classes.flexBar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542,
          columnNumber: 21
        }
      }, activeStep < 5 && __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        fullWidth: true,
        variant: "outlined",
        disabled: activeStep === 0,
        onClick: this.handleBack,
        className: classes.backButton,
        size: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 25
        }
      }, "Back"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
        fullWidth: true,
        variant: "contained",
        color: "primary",
        type: "submit",
        size: "large",
        disabled: this.state.activeStep === 0 && !termsChecked || this.state.activeStep === 4 && !conditionsChecked || loading,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 23
        }
      }, loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__["default"], {
        size: 24,
        className: classes.buttonProgress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 36
        }
      }) : this.stepActions())))))))));
    }
  }]);

  return LoanApplicationForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Form0 = function Form0(_ref) {
  var fixedHeightPaper = _ref.fixedHeightPaper,
      classes = _ref.classes,
      firstName = _ref.firstName,
      termsChecked = _ref.termsChecked,
      handleChange = _ref.handleChange,
      handleTerms = _ref.handleTerms,
      Label = _ref.Label;
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 11
    }
  }, "Loan Application Instructions"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 11
    }
  }, "Welcome to the InstaKash application portal ", firstName, ","), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 11
    }
  }, "we will walk you through the easy process as you continue your application."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 11
    }
  }, "Please have the following documents avalable:"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 13
    }
  }, "Basic information about yourself"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 13
    }
  }, "For personal loans, specify employer, employer refrence number, your current salary "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 13
    }
  }, "A picture of you for your loan profile")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 11
    }
  }, "Your application is automatically saved as you go through the process"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 11
    }
  }, "For inquiries please send an email to borrow@InstaKash.com"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 11
    }
  }, "Application requirements"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 11
    }
  }, "The following are specific requirements for applying for POP lending"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 13
    }
  }, "Read instructions"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 13
    }
  }, "Provide all other personal information"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 13
    }
  }, "Employment history "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 13
    }
  }, "BVN "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 13
    }
  }, "Bank details"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 13
    }
  }, "Documents for account statements")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 11
    }
  }, "Click next to proceed to the next stage of your InstaKash application")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "termsChecked",
      checked: termsChecked,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 15
      }
    }),
    label: Label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 11
    }
  }))));
};

_c2 = Form0;

var Form1 = function Form1(_ref2) {
  var classes = _ref2.classes,
      handleChange = _ref2.handleChange,
      handleTerms = _ref2.handleTerms,
      _ref2$state = _ref2.state,
      firstName = _ref2$state.firstName,
      lastName = _ref2$state.lastName,
      dob = _ref2$state.dob,
      mobile = _ref2$state.mobile,
      mobileCheck = _ref2$state.mobileCheck,
      employeeReference = _ref2$state.employeeReference,
      employeeNumber = _ref2$state.employeeNumber,
      salary = _ref2$state.salary,
      address = _ref2$state.address,
      email = _ref2$state.email,
      region = _ref2$state.region,
      addressCheck = _ref2$state.addressCheck,
      NationalIdNo = _ref2$state.NationalIdNo;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 7
    }
  }, "PERSONAL INFORMATION"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "firstName",
    id: "outlined-required-firstName",
    label: "First Name",
    variant: "outlined",
    value: firstName,
    onChange: handleChange,
    placeholder: "Enter Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-lastName",
    label: "Last Name",
    variant: "outlined",
    name: "lastName",
    value: lastName,
    onChange: handleChange,
    placeholder: "Enter Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-nin-input",
    label: "National ID Number",
    autoComplete: "national-id-number",
    variant: "outlined",
    name: "NationalIdNo",
    value: NationalIdNo,
    onChange: handleChange,
    placeholder: "Enter National ID Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-dob-input",
    label: "Date of Birth",
    variant: "outlined",
    type: "date",
    format: "dd/mm/yyyy",
    name: "dob",
    value: dob,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "email",
    value: email,
    onChange: handleChange,
    placeholder: "Enter Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "mobile",
    value: mobile,
    onChange: handleChange,
    placeholder: "Enter Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 0
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      marginTop: '-10px',
      marginLeft: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "mobileCheck",
      checked: mobileCheck,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763,
        columnNumber: 19
      }
    }),
    label: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "body2",
      style: {
        fontSize: '0.5rem'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770,
        columnNumber: 24
      }
    }, "By clicking the button you opt in for sms notification of offerings sms charges apply"),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "employeeReference",
    id: "outlined-employee-reference",
    label: "Employer Address",
    variant: "outlined",
    value: employeeReference,
    onChange: handleChange,
    placeholder: "Enter your Employers Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "employeeNumber",
    id: "outlined-employee-number",
    label: "Employee Number",
    variant: "outlined",
    value: employeeNumber,
    onChange: handleChange,
    placeholder: "Enter Employee Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    name: "salary",
    id: "outlined-salary",
    label: "Salary",
    variant: "outlined",
    type: "number",
    value: salary,
    onChange: handleChange,
    placeholder: "Enter Monthly Salary Amount",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-address",
    label: "Physical Address Information",
    variant: "outlined",
    name: "address",
    value: address,
    onChange: handleChange,
    placeholder: "Enter your home address, please specify street name or use location finder",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 843,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-region",
    select: true,
    label: "Current Region",
    name: "region",
    value: region,
    onChange: handleChange,
    variant: "outlined",
    placeholder: "Select Region",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 11
    }
  }, _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__.map(function (region) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: region.region_id,
      value: region.region_id,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 15
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861,
        columnNumber: 19
      }
    }, region.name_en), __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861,
        columnNumber: 46
      }
    }, region.name_ar)));
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    style: {
      padding: 0
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 868,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    style: {
      "float": "left"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      marginTop: '-15px',
      marginLeft: 0,
      marginRight: 0
    },
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "addressCheck",
      checked: addressCheck,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 19
      }
    }),
    label: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
      variant: "body2",
      style: {
        fontSize: '0.5rem'
      },
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881,
        columnNumber: 24
      }
    }, "Please indicate if your address has changed in the past 3 years."),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 871,
      columnNumber: 15
    }
  }))))));
};

_c3 = Form1;

var Form2 = function Form2(_ref3) {
  var classes = _ref3.classes,
      handleChange = _ref3.handleChange,
      edulist = _ref3.edulist,
      _ref3$state = _ref3.state,
      gender = _ref3$state.gender,
      education = _ref3$state.education,
      ethnicity = _ref3$state.ethnicity;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 7
    }
  }, "DEMOGRAPHICS"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 900,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    required: true,
    fullWidth: true,
    id: "outlined-select-gender",
    select: true,
    label: "Gender",
    name: "gender",
    value: gender,
    onChange: handleChange,
    variant: "outlined",
    placeholder: "Please pick your gender",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 901,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "male",
    value: "male",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 13
    }
  }, "Male"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "female",
    value: "female",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 13
    }
  }, "Female"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 923,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-education",
    select: true,
    label: "Education",
    placeholder: "Education",
    name: "education",
    value: education,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
      columnNumber: 11
    }
  }, edulist.map(function (level) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: level,
      value: level,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 15
      }
    }, level);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "ethnicity",
    id: "outlined-ethnicity",
    label: "Ethnicity",
    variant: "outlined",
    value: ethnicity,
    onChange: handleChange,
    placeholder: "Enter Ethnicity",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 11
    }
  }))));
};

_c4 = Form2;

var Form3 = function Form3(_ref4) {
  var classes = _ref4.classes,
      handleChange = _ref4.handleChange,
      banks = _ref4.banks,
      handleSave = _ref4.handleSave,
      handleDateChange = _ref4.handleDateChange,
      _ref4$state = _ref4.state,
      gracePeriod = _ref4$state.gracePeriod,
      hascreditScore = _ref4$state.hascreditScore,
      creditScore = _ref4$state.creditScore,
      repaymentPlan = _ref4$state.repaymentPlan,
      bankName = _ref4$state.bankName,
      accountNumber = _ref4$state.accountNumber,
      cardNumber = _ref4$state.cardNumber,
      cvv = _ref4$state.cvv,
      expDate = _ref4$state.expDate;
  var date = new Date();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 9
    }
  }, "ELIGIBILITY"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-select-gracePeriod",
    select: true,
    label: "Eligibility for grace period",
    name: "gracePeriod",
    value: gracePeriod,
    onChange: handleChange,
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 13
    }
  }, ['1 Week', '2 Weeks', '3 Weeks', '1 Month'].map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: item,
      value: item,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 987,
        columnNumber: 17
      }
    }, item);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-education",
    select: true,
    label: "Do you have a credit score?",
    name: "hascreditScore",
    value: hascreditScore,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
      columnNumber: 15
    }
  }, "Yes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 15
    }
  }, "No"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    disabled: !hascreditScore ? true : false,
    name: "creditScore",
    id: "outlined-creditScore",
    label: "If yes, please provide your credit score",
    variant: "outlined",
    value: creditScore,
    onChange: handleChange,
    placeholder: "Enter Credit Score",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1032,
      columnNumber: 9
    }
  }, "DEBIT & RECONCILIATION AUTHORIZATION"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-select-repayment-plan",
    select: true,
    label: "How would you like to repay your loan?",
    name: "repaymentPlan",
    value: repaymentPlan,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: "Bank",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 15
    }
  }, "Bank"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: "Card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 15
    }
  }, "Card"))), repaymentPlan === 'Card' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1060,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    type: "number",
    name: "cardNumber",
    id: "outlined-cardNumber",
    label: "Card Number",
    variant: "outlined",
    value: cardNumber,
    onChange: handleChange,
    placeholder: "Enter Card Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1061,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    type: "number",
    name: "cvv",
    id: "outlined-cvv",
    label: "CVV",
    variant: "outlined",
    value: cvv,
    onChange: handleChange,
    placeholder: "Enter CVV",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1094,
      columnNumber: 15
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__["DatePicker"], {
    variant: "inline",
    inputVariant: "outlined",
    views: ["year", "month"],
    label: "Expiry Date",
    name: "expDate",
    minDate: date,
    maxDate: new Date(date.getFullYear() + 3, date.getMonth()),
    value: expDate,
    onChange: handleDateChange,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    id: "outlined-select-bank-name",
    select: true,
    label: "Bank Name",
    placeholder: "Enter Bank Name",
    name: "bankName",
    value: bankName,
    onChange: handleChange,
    InputLabelProps: {
      shrink: true
    },
    variant: "outlined",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 15
    }
  }, banks.map(function (bank, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index,
      value: bank,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1128,
        columnNumber: 19
      }
    }, bank);
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    required: true,
    type: "number",
    name: "accountNumber",
    id: "outlined-accountNumber",
    label: "Account Number",
    variant: "outlined",
    value: accountNumber,
    onChange: handleChange,
    placeholder: "Enter Account Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 9
    }
  }, "LIST OF DOCUMENTS TO UPLOAD"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: '20px 0',
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      backgroundColor: '#ececec',
      padding: '8px'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 17
    }
  }, "A passport photograph"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 17
    }
  }, "Bank statement"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 17
    }
  }, "Letter of employment")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 11
    }
  }, __jsx(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_32__["DropzoneArea"], {
    onChange: handleSave,
    filesLimit: 4,
    acceptedFiles: ['image/jpeg', 'image/png', 'application/pdf'],
    showPreviews: true,
    maxFileSize: 5000000,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 13
    }
  }))));
};

_c5 = Form3;

var Form4 = function Form4(_ref5) {
  var classes = _ref5.classes,
      handleTerms = _ref5.handleTerms,
      conditionsChecked = _ref5.state.conditionsChecked;
  return __jsx("div", {
    className: classes.bigContainer,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1183,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: 24
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "caption",
    className: classes.formLabel,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 11
    }
  }, "TERMS & CONDITIONS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1192,
      columnNumber: 11
    }
  }, "Please read through and accept the terms & conditions")), __jsx("div", {
    style: {
      height: 330,
      padding: 16,
      border: "2px solid #ccc",
      borderRadius: "3px",
      overflowY: "scroll"
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "subtitle1",
    style: {
      fontWeight: "bold"
    },
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1206,
      columnNumber: 11
    }
  }, "1. Your agreement"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1213,
      columnNumber: 11
    }
  }, "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "subtitle1",
    style: {
      fontWeight: "bold"
    },
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 11
    }
  }, "2. Privacy"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1238,
      columnNumber: 11
    }
  }, "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1259,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_24__["default"], {
      name: "conditionsChecked",
      checked: conditionsChecked,
      onChange: handleTerms,
      value: "check",
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1262,
        columnNumber: 15
      }
    }),
    label: "I have read and understood the terms & conditions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 11
    }
  }))));
};

_c6 = Form4;

var Form5 = function Form5(_ref6) {
  var classes = _ref6.classes,
      handleChange = _ref6.handleChange,
      successPaper = _ref6.successPaper,
      description = _ref6.state.description;
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: successPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.successText,
    variant: "body1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 9
    }
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 9
    }
  }, "You're one step closer to completing your loan application, ", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 71
    }
  }), "Instakash would like to get your personal social media details and 5 of your close contacts information.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289,
      columnNumber: 7
    }
  }, "SOCIAL MEDIA HANDLE"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1290,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1291,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "input-with-icon-textfield",
    label: "Facebook",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1300,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1301,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-twitter",
    label: "Twitter",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1316,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1317,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1308,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1323,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-instagram",
    label: "Instagram",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1332,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1333,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1324,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    className: classes.margin,
    id: "social-snapchat",
    label: "Snap Chat",
    variant: "outlined",
    InputProps: {
      startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_39__["default"], {
        position: "start",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1348,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1349,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1340,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1356,
      columnNumber: 7
    }
  }, "REFEREE CONTACT INFO"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1357,
      columnNumber: 7
    }
  }, "  Referee 1"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1359,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1360,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee1firstName",
    id: "outlined-required-referee1firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1361,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1375,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee1lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1376,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1389,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee1email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1390,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1404,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee1mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee1mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1405,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1420,
      columnNumber: 7
    }
  }, "  Referee 2"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1422,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1423,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee2firstName",
    id: "outlined-required-referee2firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1424,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1438,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee2lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1439,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1452,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee2email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1453,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1467,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee2mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee2mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1468,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1483,
      columnNumber: 7
    }
  }, "  Referee 3"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1485,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1486,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee3firstName",
    id: "outlined-required-referee3firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1487,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1501,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee3lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1502,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1515,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee3email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1516,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1530,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee3mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee3mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1531,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546,
      columnNumber: 7
    }
  }, "  Referee 4"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1548,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1549,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee4firstName",
    id: "outlined-required-referee4firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1550,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1564,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee4lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1565,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1578,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee4email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1579,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1593,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee4mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee4mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1594,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1609,
      columnNumber: 7
    }
  }, "  Referee 5"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    container: true,
    spacing: 2,
    style: {
      margin: 0,
      width: '100%'
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1611,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1612,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    name: "referee5firstName",
    id: "outlined-required-referee5firstName",
    label: "First Name",
    variant: "outlined",
    onChange: handleChange,
    placeholder: "Enter Referee Firstname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1613,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1627,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5lastName",
    label: "Last Name",
    variant: "outlined",
    name: "referee5lastName",
    onChange: handleChange,
    placeholder: "Enter Referee Lastname",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1628,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1641,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    name: "referee5email",
    onChange: handleChange,
    placeholder: "Enter Referee Email Address",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1642,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1656,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fullWidth: true,
    id: "outlined-referee5mobile",
    label: "Mobile Number",
    type: "number",
    variant: "outlined",
    name: "referee5mobile",
    onChange: handleChange,
    placeholder: "Enter Referee Mobile Number",
    InputLabelProps: {
      shrink: true
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1657,
      columnNumber: 11
    }
  }))));
};

_c7 = Form5;

var Form6 = function Form6(_ref7) {
  var classes = _ref7.classes,
      dash = _ref7.dash,
      firstName = _ref7.state.firstName;
  return __jsx("div", {
    className: classes.smallContainer,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1678,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1679,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    container: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1680,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1681,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1682,
      columnNumber: 13
    }
  }, "Congratulations", " ", __jsx("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1684,
      columnNumber: 15
    }
  }, firstName, "!!!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1689,
      columnNumber: 13
    }
  }, "An email has been sent to you with your loan application ID. If you wish to make enquiries about your loan, please send an email to borrow@InstaKash.com."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1694,
      columnNumber: 13
    }
  }, "Your dashboard is ready for you to review your loan history"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    variant: "outlined",
    onClick: dash,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1697,
      columnNumber: 13
    }
  }, "Back to Dashboard")))));
};

_c8 = Form6;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles_withStyles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles)(LoanApplicationForm));
{
  /* <Grid item xs={12} sm={2}>
   <TextField
   disabled={!region ? true : false}
   id="outlined-select-city"
   select
   label="Current City"
   name="city"
   value={city}
   onChange={handleChange}
   InputLabelProps={{
   shrink: true,
   }}
   variant="outlined"
   >
   {region ? (this.getCity(region).map((city) => (
   <MenuItem key={city.city_id} value={city.city_id}>
   <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
   <div>{city.name_en}</div><div>{city.name_ar}</div>
   </div>
   </MenuItem>
   ))) : (this.getCity(1).map((city) => (
   <MenuItem key={city.city_id} value={city.name_en}>
   <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
   <div>{city.name_en}</div><div>{city.name_ar}</div>
   </div>
   </MenuItem>
   )))}
   </TextField>
  </Grid> */
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "AnimatedGrid");
$RefreshReg$(_c2, "Form0");
$RefreshReg$(_c3, "Form1");
$RefreshReg$(_c4, "Form2");
$RefreshReg$(_c5, "Form3");
$RefreshReg$(_c6, "Form4");
$RefreshReg$(_c7, "Form5");
$RefreshReg$(_c8, "Form6");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJEYXRlIiwiZmlsZXMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJBcGkiLCJreWNVcGRhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJhcGlEYXRhIiwibG9hbkFwcGxpY2F0aW9uIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImtleXMiLCJpIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImRvY1VwbG9hZCIsImVycm9yIiwiY2xlYXIiLCJwYXJzZSIsImVkdWxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVUZXJtcyIsImJpbmQiLCJjbGFzc2VzIiwic3RlcHMiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIkxhYmVsIiwibWFwIiwibGFiZWwiLCJzdWJtaXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiaXRlbXMiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImhhbmRsZUJhY2siLCJzdGVwQWN0aW9ucyIsIkNvbXBvbmVudCIsIkZvcm0wIiwiRm9ybTEiLCJzaHJpbmsiLCJtYXJnaW5MZWZ0IiwicmVnaW9ucyIsIm5hbWVfZW4iLCJuYW1lX2FyIiwiRm9ybTIiLCJsZXZlbCIsIkZvcm0zIiwiZGF0ZSIsIml0ZW0iLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaW5kZXgiLCJGb3JtNCIsImJvcmRlciIsIm92ZXJmbG93WSIsImZvbnRXZWlnaHQiLCJGb3JtNSIsInN0YXJ0QWRvcm5tZW50IiwiRm9ybTYiLCJkYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw4REFBUSxDQUFDQywrREFBRCxDQUE3QjtLQUFNRixZOztB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QSxtRUFiRixFQWdCRSxNQUFDLGlFQUFEO0FBQVEsYUFBUyxNQUFqQjtBQUFrQixXQUFPLEVBQUMsVUFBMUI7QUFBcUMsV0FBTyxFQUFFeUgsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkYsQ0FERixDQURGLENBREYsQ0FERjtBQTRCRCxDQTdCRDs7TUFBTUQsSztBQStCU3BJLDhJQUFVLENBQUN4RCxNQUFELENBQVYsQ0FBbUI2RCxtQkFBbkIsQ0FBZjtBQUVBO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmQuanMuM2Q3ZmU3MWQxNDQ0OGJhMzFmNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gJ3JlYWN0LXNwcmluZy9yZW5kZXJwcm9wcy5janMnO1xuaW1wb3J0IHthbmltYXRlZCwgY29uZmlnfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXMvd2l0aFN0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBTdGVwcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwcGVyXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcFwiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcExhYmVsXCI7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XG5pbXBvcnQgU3RlcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcEljb24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7RHJvcHpvbmVBcmVhfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XG5pbXBvcnQgSW5zdGFncmFtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtJztcbmltcG9ydCBOb3RpZmljYXRpb25zQWN0aXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc0FjdGl2ZSc7XG5pbXBvcnQgQWNjb3VudEJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3gnO1xuaW1wb3J0IFN1cGVydmlzZWRVc2VyQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3VwZXJ2aXNlZFVzZXJDaXJjbGUnO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3BpY2tlcnNcIjtcbmltcG9ydCBCYWNrIGZyb20gXCIuL2NvbW1vbi9CYWNrXCI7XG5pbXBvcnQgbnVtZXJhbCBmcm9tIFwibnVtZXJhbFwiO1xuaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9ucyc7XG4vLyBpbXBvcnQgUGF5c3RhY2sgZnJvbSAnLi4vdXRpbHMvYXhpb3MucGF5c3RhY2snO1xuaW1wb3J0IEFwaSBmcm9tICcuLi91dGlscy9heGlvcy5zZXJ2aWNlJztcbmltcG9ydCByZWdpb25zIGZyb20gJy4vZGF0YS9zYXVkaV9yZWdpb25zX2xpdGUuanNvbic7XG5pbXBvcnQgaW5kaWdvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9pbmRpZ28nO1xuXG5jb25zdCBBbmltYXRlZEdyaWQgPSBhbmltYXRlZChHcmlkKVxuY29uc3QgbG9jYWxTdG9yYWdlID0gcmVxdWlyZSgnbG9jYWwtc3RvcmFnZScpXG5jb25zdCBiYWNrZ3JvdW5kU2hhcGUgPSByZXF1aXJlKFwiLi4vcHVibGljL2ltYWdlcy9zaGFwZS5zdmdcIik7XG5cbm51bWVyYWwuZGVmYXVsdEZvcm1hdChcIjAsMDAwXCIpO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeVtcIkExMDBcIl0sXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiMCA0MDBweFwiLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgcGFkZGluZzogJzIwIDAnLFxuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuXG4gIGdyaWQ6IHtcbiAgICBtYXJnaW46IDBcbiAgfSxcbiAgc21hbGxDb250YWluZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbiAgYmlnQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG4gIHN0ZXBDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgfSxcbiAgc3RlcEdyaWQ6IHtcbiAgICB3aWR0aDogXCI4MCVcIlxuICB9LFxuICBiYWNrQnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcbiAgfSxcbiAgb3V0bGluZWRCdXR0b206IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKVxuICB9LFxuICBzdGVwcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIjp7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH1cbiAgfSxcblxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcbiAgICBmbGV4R3JvdzogMCxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgfSxcblxuICBwYXBlcjoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9LFxuICBzdWNjZXNzUGFwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICB9LFxuICBzdWNjZXNzVGV4dDoge1xuICAgIG1hcmdpbjogJzVweCAwJyxcbiAgICBjb2xvcjogJ3doaXRlJ1xuICB9LFxuICBmb3JtUGFwZXI6IHtcbiAgICBtYXJnaW46IDAsXG4gIH0sXG4gIGZvcm1MYWJlbDoge1xuICAgIHBhZGRpbmc6IDgsXG4gICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgIGNvbG9yOnRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG4gIGZvcm1TdWJMYWJlbDoge1xuICAgIHBhZGRpbmc6IDgsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgfSxcbiAgZm9ybUNhcHRpb246e1xuICAgIHBhZGRpbmc6IDgsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgfSxcbiAgZml4ZWRIZWlnaHQ6IHtcbiAgICBoZWlnaHQ6IDI1MCxcbiAgfSxcbiAgdG9wSW5mbzoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogNDJcbiAgfSxcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAnJiAuTXVpVGV4dEZpZWxkLXJvb3QnOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIlxuICAgICAgfSxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgYm9yZGVyQ29sdW1uOiB7XG4gICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ncmV5W1wiMTAwXCJdfWAsXG4gICAgcGFkZGluZ0JvdHRvbTogMjQsXG4gICAgbWFyZ2luQm90dG9tOiAyNFxuICB9LFxuICBidXR0b25Qcm9ncmVzczoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAvLyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAvLyB0b3A6ICc1MCUnLFxuICAgIC8vIGxlZnQ6ICc1MCUnLFxuICAgIC8vIG1hcmdpblRvcDogLTEyLFxuICAgIC8vIG1hcmdpbkxlZnQ6IC0xMixcbiAgfSxcbiAgZmxleEJhcjoge1xuICAgIG1hcmdpblRvcDogMzIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25TZWxmOiBcImZsZXgtZW5kXCIsXG4gICAgd2lkdGg6ICc0MCUnLFxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCI6e1xuICAgICAgbWFyZ2luUmlnaHQ6ICcxNXB4J1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IEN1c3RvbVN0ZXBJY29uID0gd2l0aFN0eWxlcyh7XG4gIHRleHQ6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gIH1cbn0pKFN0ZXBJY29uKVxuXG5cbmNvbnN0IGdldFN0ZXBzID0gKCkgPT4ge1xuICByZXR1cm4gW1wiSU5TVFJVQ1RJT05TXCIsIFwiUEVSU09OQUwgSU5GT1wiLCBcIkRFTU9HUkFQSElDU1wiLCBcIkVMSUdJQklMSVRZXCIsIFwiQUdSRUVNRU5UXCIsIFwiT1RIRVIgSU5GT1wiLCBcIkNPTVBMRVRFXCJdO1xufTtcblxuY29uc3QgYmFua3MgPSBbJ1RoZSBOYXRpb25hbCBDb21tZXJjaWFsIEJhbmsnLCAnVGhlIFNhdWRpIEJyaXRpc2ggQmFuaycsICdTYXVkaSBJbnZlc3RtZW50IEJhbmsnLCdhbGlubWEgYmFuaycsJ0JhbnF1ZSBTYXVkaSBGcmFuc2knLCdSaXlhZCBCYW5rJywgJ1NhbWJhIEZpbmFuY2lhbCBHcm91cCAoU2FtYmEpJywgJ2FsYXd3YWwgYmFuaycsICdBbCBSYWpoaSBCYW5rJywgJ0FyYWIgTmF0aW9uYWwgQmFuaycsICdCYW5rIEFsQmlsYWQnLCAnQmFuayBBbEphemlyYScsICdHdWxmIEludGVybmF0aW9uYWwgQmFuayBTYXVkaSBBcmliaWEgKEdJQi1TQSknXVxuXG5jbGFzcyBMb2FuQXBwbGljYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgYWN0aXZlU3RlcDogMCxcbiAgICB0ZXJtc0NoZWNrZWQ6IGZhbHNlLFxuICAgIGNvbmRpdGlvbnNDaGVja2VkOiBmYWxzZSxcbiAgICBsYWJlbFdpZHRoOiAwLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBmaXJzdE5hbWU6IHRoaXMucHJvcHMuZmlyc3ROYW1lLFxuICAgIGxhc3ROYW1lOiB0aGlzLnByb3BzLmRhdGEubGFzdF9uYW1lLFxuICAgIE5hdGlvbmFsSWRObzogdGhpcy5wcm9wcy5kYXRhLm5hdGlvbmFsX2lkID8gdGhpcy5wcm9wcy5kYXRhLm5hdGlvbmFsX2lkIDogJycsXG4gICAgZG9iOiB0aGlzLnByb3BzLmRhdGEuZG9iID8gdGhpcy5wcm9wcy5kYXRhLmRvYiA6ICcnLFxuICAgIGVtYWlsOiB0aGlzLnByb3BzLmVtYWlsLFxuICAgIG1vYmlsZTogdGhpcy5wcm9wcy5kYXRhLm1vYmlsZSA/IHRoaXMucHJvcHMuZGF0YS5tb2JpbGUgOiAnJyxcbiAgICBhZGRyZXNzOiB0aGlzLnByb3BzLmRhdGEuYWRkcmVzcyA/IHRoaXMucHJvcHMuZGF0YS5hZGRyZXNzIDogJycsXG4gICAgcmVnaW9uOiAnJyxcbiAgICBnZW5kZXI6IHRoaXMucHJvcHMuZGF0YS5nZW5kZXIgPyB0aGlzLnByb3BzLmRhdGEuZ2VuZGVyIDogJycsXG4gICAgZWR1Y2F0aW9uOiAnJyxcbiAgICBldGhuaWNpdHk6JycsXG4gICAgZW1wbG95ZWVSZWZlcmVuY2U6IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9yZWZlcmVuY2UgPyB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfcmVmZXJlbmNlIDogJycsXG4gICAgZW1wbG95ZWVOdW1iZXI6IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9udW1iZXIgPyB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfbnVtYmVyIDogJycsXG4gICAgc2FsYXJ5OiB0aGlzLnByb3BzLmRhdGEuc2FsYXJ5ID8gdGhpcy5wcm9wcy5kYXRhLnNhbGFyeSA6ICcnLFxuICAgIHF1ZXN0aW9uczonJyxcbiAgICBtb2JpbGVDaGVjazogZmFsc2UsXG4gICAgYWRkcmVzc0NoZWNrOiBmYWxzZSxcbiAgICBncmFjZVBlcmlvZDogJycsXG4gICAgaGFzY3JlZGl0U2NvcmU6IGZhbHNlLFxuICAgIGNyZWRpdFNjb3JlOiAnJyxcbiAgICByZXBheW1lbnRQbGFuOiAnJyxcbiAgICBiYW5rTmFtZTogdGhpcy5wcm9wcy5kYXRhLmJhbmsgPyB0aGlzLnByb3BzLmRhdGEuYmFuayA6ICcnLFxuICAgIGFjY291bnROdW1iZXI6IHRoaXMucHJvcHMuZGF0YS5hY2NvdW50X251bWJlciA/IHRoaXMucHJvcHMuZGF0YS5hY2NvdW50X251bWJlciA6ICcnLFxuICAgIGJhbmtzOiBiYW5rcyxcbiAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICBjdnY6ICcnLFxuICAgIGV4cERhdGU6IG5ldyBEYXRlKCksXG4gICAgZmlsZXM6IFtdXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaWYgKHRoaXMuc291cmNlKSB7XG4gICAgLy8gICAgICAgdGhpcy5zb3VyY2UuY2FuY2VsKCdDYW5jZWwgcHJldmlvdXMgcmVxdWVzdCcpO1xuICAgIC8vICAgfVxuICAgIC8vIHRoaXMuc291cmNlID0gUGF5c3RhY2suc291cmNlKClcbiAgICAvLyBQYXlzdGFjay5iYW5rcyh7IGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlbiB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe2JhbmtzOiByZXNwb25zZS5kYXRhLmRhdGF9KVxuICAgIC8vIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnKSlcbiAgICBpZiAoZm9ybURhdGEpe3RoaXMuc2V0U3RhdGUoey4uLmZvcm1EYXRhfSl9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5zb3VyY2UuY2FuY2VsKCdwYXlzdGFjayByZXF1ZXN0IGNhbmNlbGVkJylcbiAgfVxuXG4gIGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgYWN0aXZlU3RlcDogc3RhdGUuYWN0aXZlU3RlcCArIDFcbiAgICB9KSk7XG4gICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlfVxuICAgIGRlbGV0ZSBkYXRhLmJhbmtzXG4gICAgZGVsZXRlIGRhdGEuZmlsZXNcbiAgICBkZWxldGUgZGF0YS5sb2FkaW5nXG4gICAgZGVsZXRlIGRhdGEuY2FyZE51bWJlclxuICAgIGRlbGV0ZSBkYXRhLmN2dlxuICAgIGRlbGV0ZSBkYXRhLmV4cERhdGVcbiAgICBpZihkYXRhLmFjdGl2ZVN0ZXAgPCA0KSB7XG4gICAgbG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShkYXRhKSl9XG4gIH07XG5cbiAgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwIC0gMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IDBcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUZXJtcyA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHN0ZXBBY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQpIHtcbiAgICAgIHJldHVybiBcIkFjY2VwdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAzKSB7XG4gICAgICByZXR1cm4gXCJTdWJtaXRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIFwiRG9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJOZXh0XCI7XG4gIH1cblxuICBnb1RvRGFzaGJvYXJkID0gZXZlbnQgPT4ge1xuICAgIFJvdXRlci5yZWxvYWQoKVxuICB9O1xuXG4gIGdldENpdHkgPSBpZCA9PiB7XG4gICAgcmV0dXJuIGNpdGllcy5maWx0ZXIoY2l0eSA9PiB7XG4gICAgICByZXR1cm4gY2l0eS5yZWdpb25faWQgPT09IGlkXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmUoZmlsZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWxlczogZmlsZXMsfSk7XG4gIH1cblxuICBoYW5kbGVEYXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgZXhwRGF0ZSA9IG5ldyBEYXRlKGV2ZW50KVxuICAgIGNvbnNvbGUubG9nKGV4cERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2V4cERhdGV9KVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIHN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCAhPT0gNCAmJiB0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDYpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU5leHQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5nb1RvRGFzaGJvYXJkKClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pXG4gICAgICBjb25zdCBreWNGb3JtID0ge1xuICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLnN0YXRlLmZpcnN0TmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnN0YXRlLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgbmF0aW9uYWxfaWQ6IHRoaXMuc3RhdGUuTmF0aW9uYWxJZE5vLFxuICAgICAgICBzYWxhcnk6IHRoaXMuc3RhdGUuc2FsYXJ5LFxuICAgICAgICBlbXBsb3llZV9yZWZlcmVuY2U6IHRoaXMuc3RhdGUuZW1wbG95ZWVSZWZlcmVuY2UsXG4gICAgICAgIGVtcGxveWVlX251bWJlcjogdGhpcy5zdGF0ZS5lbXBsb3llZU51bWJlcixcbiAgICAgICAgZ2VuZGVyOiB0aGlzLnN0YXRlLmdlbmRlcixcbiAgICAgICAgYmFuazogdGhpcy5zdGF0ZS5iYW5rTmFtZSA/IHRoaXMuc3RhdGUuYmFua05hbWUgOiAnRHVtbXkgRGF0YScsXG4gICAgICAgIG1vYmlsZTogdGhpcy5zdGF0ZS5tb2JpbGUsXG4gICAgICAgIGRvYjogdGhpcy5zdGF0ZS5kb2IsXG4gICAgICAgIHRlbnVyZTogdGhpcy5wcm9wcy5kYXRhLnRlbnVyZSxcbiAgICAgICAgaW5pdGlhbF9hbW91bnQ6IHRoaXMucHJvcHMuZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxuICAgICAgICBhY2NvdW50X251bWJlcjogdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyID8gdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyIDogJzEyMzQ1Njc4OTAnLFxuICAgICAgICBwYW46IHRoaXMuc3RhdGUuY2FyZE51bWJlcixcbiAgICAgICAgY3Z2OiB0aGlzLnN0YXRlLmN2dixcbiAgICAgICAgZXhwX2RhdGU6IHRoaXMuc3RhdGUuZXhwRGF0ZVxuICAgICAgfVxuICAgICAgQXBpLmt5Y1VwZGF0ZShKU09OLnN0cmluZ2lmeShreWNGb3JtKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xuICAgICAgICAgIFwiZW1haWxcIjogZGF0YS5lbWFpbCxcbiAgICAgICAgICBcImFtb3VudFwiOiBkYXRhLmluaXRpYWxfYW1vdW50LFxuICAgICAgICAgIFwibG9hbl9jb3NcIjogXCIxXCIsXG4gICAgICAgICAgXCJ0ZW51cmVcIjogZGF0YS50ZW51cmUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaURhdGEgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIEFwaS5sb2FuQXBwbGljYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IFtcIm5hdGlvbmFsX2lkXCIsICdzdGF0ZW1lbnQnLCAnY29udHJhY3QnLCAncGF5c2xpcCddXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5zdGF0ZS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICBrZXlzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb2FuX2lkJywgcmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgZmlsZXMuLi4nKTtcbiAgICAgICAgICBBcGkuZG9jVXBsb2FkKGZvcm1EYXRhKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e2NvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxuICAgICAgfSl9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZWR1bGlzdCA9IFsnTm9uZScsICdQcmltYXJ5JywgJ1NlY29uZGFyeScsICdEaXBsb21hJywgJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ0RvY3RvcmF0ZSddO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlO1xuICAgIGNvbnN0IGhhbmRsZVRlcm1zID0gdGhpcy5oYW5kbGVUZXJtc1xuICAgIGNvbnN0IGdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XG4gICAgY29uc3QgeyBhY3RpdmVTdGVwLCBmaXJzdE5hbWUsIGxvYWRpbmcsIHRlcm1zQ2hlY2tlZCwgY29uZGl0aW9uc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZml4ZWRIZWlnaHRQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5maXhlZEhlaWdodCk7XG4gICAgY29uc3Qgc3VjY2Vzc1BhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLnN1Y2Nlc3NQYXBlcik7XG4gICAgY29uc3QgTGFiZWwgPSA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlBMRUFTRSBDTElDSyBUTyBBR1JFRSBUTyBUSEUgVEVSTVMgQU5EIENPTkRJVElPTlM8L1R5cG9ncmFwaHk+XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIHsvKiA8QmFjayAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnN0ZXBwZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q3VzdG9tU3RlcEljb259PntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gdmFsaWRhdGU9XCJ0cnVlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0UGFwZXI9e2ZpeGVkSGVpZ2h0UGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBMYWJlbD17TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtc0NoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDF9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDEpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAyfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAyKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkdWxpc3Q9e2VkdWxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAzKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFua3M9e2JhbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNhdmU9e3RoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURhdGVDaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNCkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDV9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDUpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm01XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzUGFwZXI9e3N1Y2Nlc3NQYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDZ9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDYpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm02XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoPXtnb1RvRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCA1ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAwICYmICF0ZXJtc0NoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgJiYgIWNvbmRpdGlvbnNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblByb2dyZXNzfS8+IDogdGhpcy5zdGVwQWN0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb3JtMCA9ICh7Zml4ZWRIZWlnaHRQYXBlciwgY2xhc3NlcywgZmlyc3ROYW1lLCB0ZXJtc0NoZWNrZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIExhYmVsfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+TG9hbiBBcHBsaWNhdGlvbiBJbnN0cnVjdGlvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBJbnN0YUthc2ggYXBwbGljYXRpb24gcG9ydGFsIHtmaXJzdE5hbWV9LFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIHdlIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgZWFzeSBwcm9jZXNzIGFzIHlvdSBjb250aW51ZSB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBoYXZlIHRoZSBmb2xsb3dpbmcgZG9jdW1lbnRzIGF2YWxhYmxlOlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgeW91cnNlbGY8L2xpPlxuICAgICAgICAgICAgPGxpPkZvciBwZXJzb25hbCBsb2Fucywgc3BlY2lmeSBlbXBsb3llciwgZW1wbG95ZXIgcmVmcmVuY2UgbnVtYmVyLCB5b3VyIGN1cnJlbnQgc2FsYXJ5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QSBwaWN0dXJlIG9mIHlvdSBmb3IgeW91ciBsb2FuIHByb2ZpbGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uIGlzIGF1dG9tYXRpY2FsbHkgc2F2ZWQgYXMgeW91IGdvIHRocm91Z2ggdGhlIHByb2Nlc3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBGb3IgaW5xdWlyaWVzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cInN1YnRpdGxlMVwiID5BcHBsaWNhdGlvbiByZXF1aXJlbWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIGFwcGx5aW5nIGZvciBQT1AgbGVuZGluZ1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+UmVhZCBpbnN0cnVjdGlvbnM8L2xpPlxuICAgICAgICAgICAgPGxpPlByb3ZpZGUgYWxsIG90aGVyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgIDxsaT5FbXBsb3ltZW50IGhpc3RvcnkgPC9saT5cbiAgICAgICAgICAgIDxsaT5CVk4gPC9saT5cbiAgICAgICAgICAgIDxsaT5CYW5rIGRldGFpbHM8L2xpPlxuICAgICAgICAgICAgPGxpPkRvY3VtZW50cyBmb3IgYWNjb3VudCBzdGF0ZW1lbnRzPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBDbGljayBuZXh0IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RhZ2Ugb2YgeW91ciBJbnN0YUthc2ggYXBwbGljYXRpb25cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwidGVybXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e0xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5jb25zdCBGb3JtMSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtmaXJzdE5hbWUsIGxhc3ROYW1lLFxuICBkb2IsIG1vYmlsZSwgbW9iaWxlQ2hlY2ssIGVtcGxveWVlUmVmZXJlbmNlLCBlbXBsb3llZU51bWJlciwgc2FsYXJ5LCBhZGRyZXNzLFxuICBlbWFpbCwgcmVnaW9uLCBhZGRyZXNzQ2hlY2ssIE5hdGlvbmFsSWROb31cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlBFUlNPTkFMIElORk9STUFUSU9OPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1uaW4taW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmF0aW9uYWwtaWQtbnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiTmF0aW9uYWxJZE5vXCJcbiAgICAgICAgICAgIHZhbHVlPXtOYXRpb25hbElkTm99XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1kb2ItaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIEJpcnRoXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJkZC9tbS95eXl5XCJcbiAgICAgICAgICAgIG5hbWU9XCJkb2JcIlxuICAgICAgICAgICAgdmFsdWU9e2RvYn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJywgcGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xMHB4JywgbWFyZ2luTGVmdDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVDaGVja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3R5bGU9e3tmb250U2l6ZTogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IG9wdCBpbiBmb3Igc21zIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgb2Ygb2ZmZXJpbmdzIHNtcyBjaGFyZ2VzIGFwcGx5XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZVJlZmVyZW5jZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLXJlZmVyZW5jZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVyIEFkZHJlc3NcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1wbG95ZXJzIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlTnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1wbG95ZWUtbnVtYmVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOdW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbXBsb3llZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cInNhbGFyeVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNhbGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIlNhbGFyeVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17c2FsYXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9udGhseSBTYWxhcnkgQW1vdW50XCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWRkcmVzc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlBoeXNpY2FsIEFkZHJlc3MgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBob21lIGFkZHJlc3MsIHBsZWFzZSBzcGVjaWZ5IHN0cmVldCBuYW1lIG9yIHVzZSBsb2NhdGlvbiBmaW5kZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZWdpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgUmVnaW9uXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWdpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUmVnaW9uXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlZ2lvbnMubWFwKChyZWdpb24pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cmVnaW9uLnJlZ2lvbl9pZH0gdmFsdWU9e3JlZ2lvbi5yZWdpb25faWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PntyZWdpb24ubmFtZV9lbn08L2Rpdj48ZGl2PntyZWdpb24ubmFtZV9hcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTE1cHgnLCBtYXJnaW5MZWZ0OjAsIG1hcmdpblJpZ2h0OjB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZGRyZXNzQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgaW5kaWNhdGUgaWYgeW91ciBhZGRyZXNzIGhhcyBjaGFuZ2VkIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgICAzIHllYXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuXG4gIClcbn1cblxuY29uc3QgRm9ybTIgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgZWR1bGlzdCwgc3RhdGU6IHtnZW5kZXIsIGVkdWNhdGlvbiwgZXRobmljaXR5fX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+REVNT0dSQVBISUNTPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ2VuZGVyXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwaWNrIHlvdXIgZ2VuZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nbWFsZScgdmFsdWU9J21hbGUnPlxuICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nZmVtYWxlJyB2YWx1ZT0nZmVtYWxlJz5cbiAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBuYW1lPVwiZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtlZHVjYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2VkdWxpc3QubWFwKChsZXZlbCkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsZXZlbH0gdmFsdWU9e2xldmVsfT5cbiAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cImV0aG5pY2l0eVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWV0aG5pY2l0eVwiXG4gICAgICAgICAgICBsYWJlbD1cIkV0aG5pY2l0eVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2V0aG5pY2l0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEV0aG5pY2l0eVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm0zID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGJhbmtzLCBoYW5kbGVTYXZlLCBoYW5kbGVEYXRlQ2hhbmdlLFxuICBzdGF0ZToge2dyYWNlUGVyaW9kLCBoYXNjcmVkaXRTY29yZSwgY3JlZGl0U2NvcmUsIHJlcGF5bWVudFBsYW4sIGJhbmtOYW1lLCBhY2NvdW50TnVtYmVyLCBjYXJkTnVtYmVyLCBjdnYsIGV4cERhdGV9fSkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+RUxJR0lCSUxJVFk8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ3JhY2VQZXJpb2RcIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbGlnaWJpbGl0eSBmb3IgZ3JhY2UgcGVyaW9kXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dyYWNlUGVyaW9kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtbJzEgV2VlaycsICcyIFdlZWtzJywgJzMgV2Vla3MnLCAnMSBNb250aCddLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRG8geW91IGhhdmUgYSBjcmVkaXQgc2NvcmU/XCJcbiAgICAgICAgICAgICAgbmFtZT1cImhhc2NyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2hhc2NyZWRpdFNjb3JlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9e3RydWV9PlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzY3JlZGl0U2NvcmU/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgbmFtZT1cImNyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiSWYgeWVzLCBwbGVhc2UgcHJvdmlkZSB5b3VyIGNyZWRpdCBzY29yZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDcmVkaXQgU2NvcmVcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9J2NhcHRpb24nPlxuICAgICAgICAgIERFQklUICYgUkVDT05DSUxJQVRJT04gQVVUSE9SSVpBVElPTlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVwYXltZW50LXBsYW5cIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJIb3cgd291bGQgeW91IGxpa2UgdG8gcmVwYXkgeW91ciBsb2FuP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXBheW1lbnRQbGFuXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlcGF5bWVudFBsYW59XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScxJyB2YWx1ZT1cIkJhbmtcIj5cbiAgICAgICAgICAgICAgICBCYW5rXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzAnIHZhbHVlPVwiQ2FyZFwiPlxuICAgICAgICAgICAgICAgIENhcmRcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7KHJlcGF5bWVudFBsYW4gPT09ICdDYXJkJykgP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FyZE51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWN2dlwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNWVlwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N2dn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENWVlwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2aWV3cz17W1wieWVhclwiLCBcIm1vbnRoXCJdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZXhwRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpICsgMyxkYXRlLmdldE1vbnRoKCkpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cERhdGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtYmFuay1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5rTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JhbmtOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JhbmtzLm1hcCgoYmFuaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17YmFua30+XG4gICAgICAgICAgICAgICAgICAgIHtiYW5rfVxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgTElTVCBPRiBET0NVTUVOVFMgVE8gVVBMT0FEXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZWNlY2VjJywgcGFkZGluZzogJzhweCd9fT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5BIHBhc3Nwb3J0IHBob3RvZ3JhcGg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5CYW5rIHN0YXRlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkxldHRlciBvZiBlbXBsb3ltZW50PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8RHJvcHpvbmVBcmVhXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYXZlfVxuICAgICAgICAgICAgICBmaWxlc0xpbWl0PXs0fVxuICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddfVxuICAgICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XG4gICAgICAgICAgICAgIG1heEZpbGVTaXplPXs1MDAwMDAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIDxRdWVzdGlvbnMgZW1haWw9e2VtYWlsfS8+ICovfVxuICAgICAgPC9QYXBlcj5cbiAgICApXG4gIH1cblxuY29uc3QgRm9ybTQgPSAoe2NsYXNzZXMsIGhhbmRsZVRlcm1zLCBzdGF0ZToge2NvbmRpdGlvbnNDaGVja2VkfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBURVJNUyAmIENPTkRJVElPTlNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmVhZCB0aHJvdWdoIGFuZCBhY2NlcHQgdGhlIHRlcm1zICZcbiAgICAgICAgICAgIGNvbmRpdGlvbnNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMzMwLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMS4gWW91ciBhZ3JlZW1lbnRcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnksIGFuZCB0b1xuICAgICAgICAgICAgY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLiBJZiB5b3UgZG9cbiAgICAgICAgICAgIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucywgcGxlYXNlIGRvXG4gICAgICAgICAgICBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmUgdGhlXG4gICAgICAgICAgICByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnkgb3JcbiAgICAgICAgICAgIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAyLiBQcml2YWN5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZXZpZXcgb3VyIFByaXZhY3kgUG9saWN5LCB3aGljaCBhbHNvIGdvdmVybnNcbiAgICAgICAgICAgIHlvdXIgdmlzaXQgdG8gdGhpcyBTaXRlLCB0byB1bmRlcnN0YW5kIG91clxuICAgICAgICAgICAgcHJhY3RpY2VzLiBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZFxuICAgICAgICAgICAgYnksIGFuZCB0byBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLFxuICAgICAgICAgICAgcGxlYXNlIGRvIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZVxuICAgICAgICAgICAgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeVxuICAgICAgICAgICAgb3Igb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25kaXRpb25zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZGl0aW9uc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9XCJJIGhhdmUgcmVhZCBhbmQgdW5kZXJzdG9vZCB0aGUgdGVybXMgJiBjb25kaXRpb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybTUgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgc3VjY2Vzc1BhcGVyLCBzdGF0ZToge2Rlc2NyaXB0aW9ufX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdWNjZXNzUGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3VjY2Vzc1RleHR9IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgWW91J3JlIG9uZSBzdGVwIGNsb3NlciB0byBjb21wbGV0aW5nIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiwgPGJyLz5cbiAgICAgICAgICBJbnN0YWthc2ggd291bGQgbGlrZSB0byBnZXQgeW91ciBwZXJzb25hbCBzb2NpYWwgbWVkaWEgZGV0YWlscyBhbmQgNSBvZiB5b3VyIGNsb3NlIGNvbnRhY3RzIGluZm9ybWF0aW9uLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5TT0NJQUwgTUVESUEgSEFORExFPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXR3aXR0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJUd2l0dGVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtaW5zdGFncmFtXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXNuYXBjaGF0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU25hcCBDaGF0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zQWN0aXZlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UkVGRVJFRSBDT05UQUNUIElORk88L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAyXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA1XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gIClcbn1cblxuY29uc3QgRm9ybTYgPSAoe2NsYXNzZXMsIGRhc2gsIHN0YXRlOiB7Zmlyc3ROYW1lfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbENvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9uc3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gPlxuICAgICAgICAgICAgICAgIHtmaXJzdE5hbWV9ISEhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdSB3aXRoIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiBJRC5cbiAgICAgICAgICAgICAgSWYgeW91IHdpc2ggdG8gbWFrZSBlbnF1aXJpZXMgYWJvdXQgeW91ciBsb2FuLFxuICAgICAgICAgICAgICBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgWW91ciBkYXNoYm9hcmQgaXMgcmVhZHkgZm9yIHlvdSB0byByZXZpZXcgeW91ciBsb2FuIGhpc3RvcnlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2Rhc2h9PlxuICAgICAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMb2FuQXBwbGljYXRpb25Gb3JtKTtcblxuey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gIDxUZXh0RmllbGRcbiAgZGlzYWJsZWQ9eyFyZWdpb24gPyB0cnVlIDogZmFsc2V9XG4gIGlkPVwib3V0bGluZWQtc2VsZWN0LWNpdHlcIlxuICBzZWxlY3RcbiAgbGFiZWw9XCJDdXJyZW50IENpdHlcIlxuICBuYW1lPVwiY2l0eVwiXG4gIHZhbHVlPXtjaXR5fVxuICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgc2hyaW5rOiB0cnVlLFxuICB9fVxuICB2YXJpYW50PVwib3V0bGluZWRcIlxuICA+XG4gIHtyZWdpb24gPyAodGhpcy5nZXRDaXR5KHJlZ2lvbikubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkuY2l0eV9pZH0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSkgOiAodGhpcy5nZXRDaXR5KDEpLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5Lm5hbWVfZW59PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpfVxuICA8L1RleHRGaWVsZD5cbjwvR3JpZD4gKi99XG4iXSwic291cmNlUm9vdCI6IiJ9