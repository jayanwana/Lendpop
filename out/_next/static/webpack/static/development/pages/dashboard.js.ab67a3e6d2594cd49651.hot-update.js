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
      var expDate = new Date(event).toJSON();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJEYXRlIiwiZmlsZXMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJBcGkiLCJreWNVcGRhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJhcGlEYXRhIiwibG9hbkFwcGxpY2F0aW9uIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImtleXMiLCJpIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImRvY1VwbG9hZCIsImVycm9yIiwiY2xlYXIiLCJwYXJzZSIsInRvSlNPTiIsImVkdWxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVUZXJtcyIsImJpbmQiLCJjbGFzc2VzIiwic3RlcHMiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIkxhYmVsIiwibWFwIiwibGFiZWwiLCJzdWJtaXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiaXRlbXMiLCJoYW5kbGVTYXZlIiwiaGFuZGxlRGF0ZUNoYW5nZSIsImhhbmRsZUJhY2siLCJzdGVwQWN0aW9ucyIsIkNvbXBvbmVudCIsIkZvcm0wIiwiRm9ybTEiLCJzaHJpbmsiLCJtYXJnaW5MZWZ0IiwicmVnaW9ucyIsIm5hbWVfZW4iLCJuYW1lX2FyIiwiRm9ybTIiLCJsZXZlbCIsIkZvcm0zIiwiZGF0ZSIsIml0ZW0iLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaW5kZXgiLCJGb3JtNCIsImJvcmRlciIsIm92ZXJmbG93WSIsImZvbnRXZWlnaHQiLCJGb3JtNSIsInN0YXJ0QWRvcm5tZW50IiwiRm9ybTYiLCJkYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw4REFBUSxDQUFDQywrREFBRCxDQUE3QjtL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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBYkYsRUFnQkUsTUFBQyxpRUFBRDtBQUFRLGFBQVMsTUFBakI7QUFBa0IsV0FBTyxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBRTBILElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBaEJGLENBREYsQ0FERixDQURGLENBREY7QUE0QkQsQ0E3QkQ7O01BQU1ELEs7QUErQlNySSw4SUFBVSxDQUFDeEQsTUFBRCxDQUFWLENBQW1CNkQsbUJBQW5CLENBQWY7QUFFQTtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLmFiNjdhM2U2ZDI1OTRjZDQ5NjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tICdyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzJztcbmltcG9ydCB7YW5pbWF0ZWQsIGNvbmZpZ30gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IFN0ZXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBJY29uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0Ryb3B6b25lQXJlYX0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0FjdGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNBY3RpdmUnO1xuaW1wb3J0IEFjY291bnRCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94JztcbmltcG9ydCBTdXBlcnZpc2VkVXNlckNpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1cGVydmlzZWRVc2VyQ2lyY2xlJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XG5pbXBvcnQgQmFjayBmcm9tIFwiLi9jb21tb24vQmFja1wiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9xdWVzdGlvbnMnO1xuLy8gaW1wb3J0IFBheXN0YWNrIGZyb20gJy4uL3V0aWxzL2F4aW9zLnBheXN0YWNrJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQgcmVnaW9ucyBmcm9tICcuL2RhdGEvc2F1ZGlfcmVnaW9uc19saXRlLmpzb24nO1xuaW1wb3J0IGluZGlnbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvaW5kaWdvJztcblxuY29uc3QgQW5pbWF0ZWRHcmlkID0gYW5pbWF0ZWQoR3JpZClcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ2xvY2FsLXN0b3JhZ2UnKVxuY29uc3QgYmFja2dyb3VuZFNoYXBlID0gcmVxdWlyZShcIi4uL3B1YmxpYy9pbWFnZXMvc2hhcGUuc3ZnXCIpO1xuXG5udW1lcmFsLmRlZmF1bHRGb3JtYXQoXCIwLDAwMFwiKTtcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbXCJBMTAwXCJdLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjAgNDAwcHhcIixcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIHBhZGRpbmc6ICcyMCAwJyxcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcblxuICBncmlkOiB7XG4gICAgbWFyZ2luOiAwXG4gIH0sXG4gIHNtYWxsQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG4gIGJpZ0NvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBzdGVwQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIHN0ZXBHcmlkOiB7XG4gICAgd2lkdGg6IFwiODAlXCJcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIG91dGxpbmVkQnV0dG9tOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfSxcbiAgc3RlcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCI6e1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9XG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgc3VjY2Vzc1BhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgfSxcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBtYXJnaW46ICc1cHggMCcsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgZm9ybVBhcGVyOiB7XG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBmb3JtTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICBjb2xvcjp0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuICBmb3JtU3ViTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZvcm1DYXB0aW9uOntcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZpeGVkSGVpZ2h0OiB7XG4gICAgaGVpZ2h0OiAyNTAsXG4gIH0sXG4gIHRvcEluZm86IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDQyXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH0sXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIGJvcmRlckNvbHVtbjoge1xuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVtcIjEwMFwiXX1gLFxuICAgIHBhZGRpbmdCb3R0b206IDI0LFxuICAgIG1hcmdpbkJvdHRvbTogMjRcbiAgfSxcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gdG9wOiAnNTAlJyxcbiAgICAvLyBsZWZ0OiAnNTAlJyxcbiAgICAvLyBtYXJnaW5Ub3A6IC0xMixcbiAgICAvLyBtYXJnaW5MZWZ0OiAtMTIsXG4gIH0sXG4gIGZsZXhCYXI6IHtcbiAgICBtYXJnaW5Ub3A6IDMyLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCdcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBDdXN0b21TdGVwSWNvbiA9IHdpdGhTdHlsZXMoe1xuICB0ZXh0OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9XG59KShTdGVwSWNvbilcblxuXG5jb25zdCBnZXRTdGVwcyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcIklOU1RSVUNUSU9OU1wiLCBcIlBFUlNPTkFMIElORk9cIiwgXCJERU1PR1JBUEhJQ1NcIiwgXCJFTElHSUJJTElUWVwiLCBcIkFHUkVFTUVOVFwiLCBcIk9USEVSIElORk9cIiwgXCJDT01QTEVURVwiXTtcbn07XG5cbmNvbnN0IGJhbmtzID0gWydUaGUgTmF0aW9uYWwgQ29tbWVyY2lhbCBCYW5rJywgJ1RoZSBTYXVkaSBCcml0aXNoIEJhbmsnLCAnU2F1ZGkgSW52ZXN0bWVudCBCYW5rJywnYWxpbm1hIGJhbmsnLCdCYW5xdWUgU2F1ZGkgRnJhbnNpJywnUml5YWQgQmFuaycsICdTYW1iYSBGaW5hbmNpYWwgR3JvdXAgKFNhbWJhKScsICdhbGF3d2FsIGJhbmsnLCAnQWwgUmFqaGkgQmFuaycsICdBcmFiIE5hdGlvbmFsIEJhbmsnLCAnQmFuayBBbEJpbGFkJywgJ0JhbmsgQWxKYXppcmEnLCAnR3VsZiBJbnRlcm5hdGlvbmFsIEJhbmsgU2F1ZGkgQXJpYmlhIChHSUItU0EpJ11cblxuY2xhc3MgTG9hbkFwcGxpY2F0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGFjdGl2ZVN0ZXA6IDAsXG4gICAgdGVybXNDaGVja2VkOiBmYWxzZSxcbiAgICBjb25kaXRpb25zQ2hlY2tlZDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZmlyc3ROYW1lOiB0aGlzLnByb3BzLmZpcnN0TmFtZSxcbiAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3RfbmFtZSxcbiAgICBOYXRpb25hbElkTm86IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA/IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA6ICcnLFxuICAgIGRvYjogdGhpcy5wcm9wcy5kYXRhLmRvYiA/IHRoaXMucHJvcHMuZGF0YS5kb2IgOiAnJyxcbiAgICBlbWFpbDogdGhpcy5wcm9wcy5lbWFpbCxcbiAgICBtb2JpbGU6IHRoaXMucHJvcHMuZGF0YS5tb2JpbGUgPyB0aGlzLnByb3BzLmRhdGEubW9iaWxlIDogJycsXG4gICAgYWRkcmVzczogdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgPyB0aGlzLnByb3BzLmRhdGEuYWRkcmVzcyA6ICcnLFxuICAgIHJlZ2lvbjogJycsXG4gICAgZ2VuZGVyOiB0aGlzLnByb3BzLmRhdGEuZ2VuZGVyID8gdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA6ICcnLFxuICAgIGVkdWNhdGlvbjogJycsXG4gICAgZXRobmljaXR5OicnLFxuICAgIGVtcGxveWVlUmVmZXJlbmNlOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfcmVmZXJlbmNlID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA6ICcnLFxuICAgIGVtcGxveWVlTnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA6ICcnLFxuICAgIHNhbGFyeTogdGhpcy5wcm9wcy5kYXRhLnNhbGFyeSA/IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgOiAnJyxcbiAgICBxdWVzdGlvbnM6JycsXG4gICAgbW9iaWxlQ2hlY2s6IGZhbHNlLFxuICAgIGFkZHJlc3NDaGVjazogZmFsc2UsXG4gICAgZ3JhY2VQZXJpb2Q6ICcnLFxuICAgIGhhc2NyZWRpdFNjb3JlOiBmYWxzZSxcbiAgICBjcmVkaXRTY29yZTogJycsXG4gICAgcmVwYXltZW50UGxhbjogJycsXG4gICAgYmFua05hbWU6IHRoaXMucHJvcHMuZGF0YS5iYW5rID8gdGhpcy5wcm9wcy5kYXRhLmJhbmsgOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgPyB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgOiAnJyxcbiAgICBiYW5rczogYmFua3MsXG4gICAgY2FyZE51bWJlcjogJycsXG4gICAgY3Z2OiAnJyxcbiAgICBleHBEYXRlOiBuZXcgRGF0ZSgpLFxuICAgIGZpbGVzOiBbXVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGlmICh0aGlzLnNvdXJjZSkge1xuICAgIC8vICAgICAgIHRoaXMuc291cmNlLmNhbmNlbCgnQ2FuY2VsIHByZXZpb3VzIHJlcXVlc3QnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB0aGlzLnNvdXJjZSA9IFBheXN0YWNrLnNvdXJjZSgpXG4gICAgLy8gUGF5c3RhY2suYmFua3MoeyBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW4gfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtiYW5rczogcmVzcG9uc2UuZGF0YS5kYXRhfSlcbiAgICAvLyB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgY29uc3QgZm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSgnZm9ybXN0YXRlJykpXG4gICAgaWYgKGZvcm1EYXRhKXt0aGlzLnNldFN0YXRlKHsuLi5mb3JtRGF0YX0pfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gcmV0dXJuIHRoaXMuc291cmNlLmNhbmNlbCgncGF5c3RhY2sgcmVxdWVzdCBjYW5jZWxlZCcpXG4gIH1cblxuICBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IHN0YXRlLmFjdGl2ZVN0ZXAgKyAxXG4gICAgfSkpO1xuICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZX1cbiAgICBkZWxldGUgZGF0YS5iYW5rc1xuICAgIGRlbGV0ZSBkYXRhLmZpbGVzXG4gICAgZGVsZXRlIGRhdGEubG9hZGluZ1xuICAgIGRlbGV0ZSBkYXRhLmNhcmROdW1iZXJcbiAgICBkZWxldGUgZGF0YS5jdnZcbiAgICBkZWxldGUgZGF0YS5leHBEYXRlXG4gICAgaWYoZGF0YS5hY3RpdmVTdGVwIDwgNCkge1xuICAgIGxvY2FsU3RvcmFnZSgnZm9ybXN0YXRlJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpfVxuICB9O1xuXG4gIGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgYWN0aXZlU3RlcDogc3RhdGUuYWN0aXZlU3RlcCAtIDFcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVTdGVwOiAwXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlVGVybXMgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBzdGVwQWN0aW9ucygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0KSB7XG4gICAgICByZXR1cm4gXCJBY2NlcHRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gMykge1xuICAgICAgcmV0dXJuIFwiU3VibWl0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDYpIHtcbiAgICAgIHJldHVybiBcIkRvbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiTmV4dFwiO1xuICB9XG5cbiAgZ29Ub0Rhc2hib2FyZCA9IGV2ZW50ID0+IHtcbiAgICBSb3V0ZXIucmVsb2FkKClcbiAgfTtcblxuICBnZXRDaXR5ID0gaWQgPT4ge1xuICAgIHJldHVybiBjaXRpZXMuZmlsdGVyKGNpdHkgPT4ge1xuICAgICAgcmV0dXJuIGNpdHkucmVnaW9uX2lkID09PSBpZFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlKGZpbGVzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXM6IGZpbGVzLH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0ZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGV4cERhdGUgPSBuZXcgRGF0ZShldmVudCkudG9KU09OKClcbiAgICBjb25zb2xlLmxvZyhleHBEYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtleHBEYXRlfSlcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIH1cblxuICBzdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDQgJiYgdGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVOZXh0KClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuZ29Ub0Rhc2hib2FyZCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxuICAgICAgY29uc3Qga3ljRm9ybSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIG5hdGlvbmFsX2lkOiB0aGlzLnN0YXRlLk5hdGlvbmFsSWRObyxcbiAgICAgICAgc2FsYXJ5OiB0aGlzLnN0YXRlLnNhbGFyeSxcbiAgICAgICAgZW1wbG95ZWVfcmVmZXJlbmNlOiB0aGlzLnN0YXRlLmVtcGxveWVlUmVmZXJlbmNlLFxuICAgICAgICBlbXBsb3llZV9udW1iZXI6IHRoaXMuc3RhdGUuZW1wbG95ZWVOdW1iZXIsXG4gICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgIGJhbms6IHRoaXMuc3RhdGUuYmFua05hbWUgPyB0aGlzLnN0YXRlLmJhbmtOYW1lIDogJ0R1bW15IERhdGEnLFxuICAgICAgICBtb2JpbGU6IHRoaXMuc3RhdGUubW9iaWxlLFxuICAgICAgICBkb2I6IHRoaXMuc3RhdGUuZG9iLFxuICAgICAgICB0ZW51cmU6IHRoaXMucHJvcHMuZGF0YS50ZW51cmUsXG4gICAgICAgIGluaXRpYWxfYW1vdW50OiB0aGlzLnByb3BzLmRhdGEuaW5pdGlhbF9hbW91bnQsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgYWNjb3VudF9udW1iZXI6IHRoaXMuc3RhdGUuYWNjb3VudE51bWJlciA/IHRoaXMuc3RhdGUuYWNjb3VudE51bWJlciA6ICcxMjM0NTY3ODkwJyxcbiAgICAgICAgcGFuOiB0aGlzLnN0YXRlLmNhcmROdW1iZXIsXG4gICAgICAgIGN2djogdGhpcy5zdGF0ZS5jdnYsXG4gICAgICAgIGV4cF9kYXRlOiB0aGlzLnN0YXRlLmV4cERhdGVcbiAgICAgIH1cbiAgICAgIEFwaS5reWNVcGRhdGUoSlNPTi5zdHJpbmdpZnkoa3ljRm9ybSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcbiAgICAgICAgICBcImVtYWlsXCI6IGRhdGEuZW1haWwsXG4gICAgICAgICAgXCJhbW91bnRcIjogZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgICBcImxvYW5fY29zXCI6IFwiMVwiLFxuICAgICAgICAgIFwidGVudXJlXCI6IGRhdGEudGVudXJlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcGlEYXRhIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBBcGkubG9hbkFwcGxpY2F0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBbXCJuYXRpb25hbF9pZFwiLCAnc3RhdGVtZW50JywgJ2NvbnRyYWN0JywgJ3BheXNsaXAnXVxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuc3RhdGUuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAga2V5c1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXS5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9hbl9pZCcsIHJlc3BvbnNlLmRhdGEuZGF0YS5pZClcbiAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGZpbGVzLi4uJyk7XG4gICAgICAgICAgQXBpLmRvY1VwbG9hZChmb3JtRGF0YSkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3I9Pntjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pXG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dCgpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgIH0pfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVkdWxpc3QgPSBbJ05vbmUnLCAnUHJpbWFyeScsICdTZWNvbmRhcnknLCAnRGlwbG9tYScsICdCYWNoZWxvcnMnLCAnTWFzdGVycycsICdEb2N0b3JhdGUnXTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZTtcbiAgICBjb25zdCBoYW5kbGVUZXJtcyA9IHRoaXMuaGFuZGxlVGVybXNcbiAgICBjb25zdCBnb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcylcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xuICAgIGNvbnN0IHsgYWN0aXZlU3RlcCwgZmlyc3ROYW1lLCBsb2FkaW5nLCB0ZXJtc0NoZWNrZWQsIGNvbmRpdGlvbnNDaGVja2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpeGVkSGVpZ2h0UGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuZml4ZWRIZWlnaHQpO1xuICAgIGNvbnN0IHN1Y2Nlc3NQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5zdWNjZXNzUGFwZXIpO1xuICAgIGNvbnN0IExhYmVsID0gPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5QTEVBU0UgQ0xJQ0sgVE8gQUdSRUUgVE8gVEhFIFRFUk1TIEFORCBDT05ESVRJT05TPC9UeXBvZ3JhcGh5PlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn1cbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICB7LyogPEJhY2sgLz4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RlcENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5zdGVwcGVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZUxhYmVsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcHMubWFwKGxhYmVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0N1c3RvbVN0ZXBJY29ufT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RlcHBlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IHZhbGlkYXRlPVwidHJ1ZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0wXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEhlaWdodFBhcGVyPXtmaXhlZEhlaWdodFBhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgTGFiZWw9e0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybXNDaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc30vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAxfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAxKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gMn1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMikgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZHVsaXN0PXtlZHVsaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gM31cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMykgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmtzPXtiYW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlPXt0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEYXRlQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDR9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDQpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm00XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA1fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA1KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1BhcGVyPXtzdWNjZXNzUGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA2fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA2KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaD17Z29Ub0Rhc2hib2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwIDwgNSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gMCAmJiAhdGVybXNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0ICYmICFjb25kaXRpb25zQ2hlY2tlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Qcm9ncmVzc30vPiA6IHRoaXMuc3RlcEFjdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9ybTAgPSAoe2ZpeGVkSGVpZ2h0UGFwZXIsIGNsYXNzZXMsIGZpcnN0TmFtZSwgdGVybXNDaGVja2VkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVRlcm1zLCBMYWJlbH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9IHtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwic3VidGl0bGUxXCIgPkxvYW4gQXBwbGljYXRpb24gSW5zdHJ1Y3Rpb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgSW5zdGFLYXNoIGFwcGxpY2F0aW9uIHBvcnRhbCB7Zmlyc3ROYW1lfSxcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICB3ZSB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIGVhc3kgcHJvY2VzcyBhcyB5b3UgY29udGludWUgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBQbGVhc2UgaGF2ZSB0aGUgZm9sbG93aW5nIGRvY3VtZW50cyBhdmFsYWJsZTpcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkJhc2ljIGluZm9ybWF0aW9uIGFib3V0IHlvdXJzZWxmPC9saT5cbiAgICAgICAgICAgIDxsaT5Gb3IgcGVyc29uYWwgbG9hbnMsIHNwZWNpZnkgZW1wbG95ZXIsIGVtcGxveWVyIHJlZnJlbmNlIG51bWJlciwgeW91ciBjdXJyZW50IHNhbGFyeSA8L2xpPlxuICAgICAgICAgICAgPGxpPkEgcGljdHVyZSBvZiB5b3UgZm9yIHlvdXIgbG9hbiBwcm9maWxlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbiBpcyBhdXRvbWF0aWNhbGx5IHNhdmVkIGFzIHlvdSBnbyB0aHJvdWdoIHRoZSBwcm9jZXNzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgRm9yIGlucXVpcmllcyBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+QXBwbGljYXRpb24gcmVxdWlyZW1lbnRzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgc3BlY2lmaWMgcmVxdWlyZW1lbnRzIGZvciBhcHBseWluZyBmb3IgUE9QIGxlbmRpbmdcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlJlYWQgaW5zdHJ1Y3Rpb25zPC9saT5cbiAgICAgICAgICAgIDxsaT5Qcm92aWRlIGFsbCBvdGhlciBwZXJzb25hbCBpbmZvcm1hdGlvbjwvbGk+XG4gICAgICAgICAgICA8bGk+RW1wbG95bWVudCBoaXN0b3J5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QlZOIDwvbGk+XG4gICAgICAgICAgICA8bGk+QmFuayBkZXRhaWxzPC9saT5cbiAgICAgICAgICAgIDxsaT5Eb2N1bWVudHMgZm9yIGFjY291bnQgc3RhdGVtZW50czwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgQ2xpY2sgbmV4dCB0byBwcm9jZWVkIHRvIHRoZSBuZXh0IHN0YWdlIG9mIHlvdXIgSW5zdGFLYXNoIGFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgbmFtZT1cInRlcm1zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGVybXNDaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPXtMYWJlbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuY29uc3QgRm9ybTEgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIHN0YXRlOiB7Zmlyc3ROYW1lLCBsYXN0TmFtZSxcbiAgZG9iLCBtb2JpbGUsIG1vYmlsZUNoZWNrLCBlbXBsb3llZVJlZmVyZW5jZSwgZW1wbG95ZWVOdW1iZXIsIHNhbGFyeSwgYWRkcmVzcyxcbiAgZW1haWwsIHJlZ2lvbiwgYWRkcmVzc0NoZWNrLCBOYXRpb25hbElkTm99XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5QRVJTT05BTCBJTkZPUk1BVElPTjwvVHlwb2dyYXBoeT5cblxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1sYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbmluLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hdGlvbmFsLWlkLW51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIk5hdGlvbmFsSWROb1wiXG4gICAgICAgICAgICB2YWx1ZT17TmF0aW9uYWxJZE5vfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZG9iLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBvZiBCaXJ0aFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgZm9ybWF0PVwiZGQvbW0veXl5eVwiXG4gICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgIHZhbHVlPXtkb2J9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17bW9iaWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsIHBhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMTBweCcsIG1hcmdpbkxlZnQ6MH19XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZUNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bW9iaWxlQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBvcHQgaW4gZm9yIHNtcyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgIG9mIG9mZmVyaW5ncyBzbXMgY2hhcmdlcyBhcHBseVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVSZWZlcmVuY2VcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbXBsb3llZS1yZWZlcmVuY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbXBsb3llciBBZGRyZXNzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVSZWZlcmVuY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtcGxveWVycyBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZU51bWJlclwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLW51bWJlclwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVlIE51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlTnVtYmVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJzYWxhcnlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zYWxhcnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJTYWxhcnlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3NhbGFyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1vbnRobHkgU2FsYXJ5IEFtb3VudFwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFkZHJlc3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJQaHlzaWNhbCBBZGRyZXNzIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaG9tZSBhZGRyZXNzLCBwbGVhc2Ugc3BlY2lmeSBzdHJlZXQgbmFtZSBvciB1c2UgbG9jYXRpb24gZmluZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVnaW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJDdXJyZW50IFJlZ2lvblwiXG4gICAgICAgICAgICBuYW1lPVwicmVnaW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZWdpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZ2lvblwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyZWdpb25zLm1hcCgocmVnaW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3JlZ2lvbi5yZWdpb25faWR9IHZhbHVlPXtyZWdpb24ucmVnaW9uX2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgPGRpdj57cmVnaW9uLm5hbWVfZW59PC9kaXY+PGRpdj57cmVnaW9uLm5hbWVfYXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3BhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwifX0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xNXB4JywgbWFyZ2luTGVmdDowLCBtYXJnaW5SaWdodDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0NoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWRkcmVzc0NoZWNrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBzdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGluZGljYXRlIGlmIHlvdXIgYWRkcmVzcyBoYXMgY2hhbmdlZCBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgICAgICAgMyB5ZWFycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cblxuICApXG59XG5cbmNvbnN0IEZvcm0yID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGVkdWxpc3QsIHN0YXRlOiB7Z2VuZGVyLCBlZHVjYXRpb24sIGV0aG5pY2l0eX19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkRFTU9HUkFQSElDUzwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdlbmRlclwiXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgcGljayB5b3VyIGdlbmRlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J21hbGUnIHZhbHVlPSdtYWxlJz5cbiAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J2ZlbWFsZScgdmFsdWU9J2ZlbWFsZSc+XG4gICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgbmFtZT1cImVkdWNhdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17ZWR1Y2F0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtlZHVsaXN0Lm1hcCgobGV2ZWwpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bGV2ZWx9IHZhbHVlPXtsZXZlbH0+XG4gICAgICAgICAgICAgICAge2xldmVsfVxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJldGhuaWNpdHlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1ldGhuaWNpdHlcIlxuICAgICAgICAgICAgbGFiZWw9XCJFdGhuaWNpdHlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtldGhuaWNpdHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFdGhuaWNpdHlcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5jb25zdCBGb3JtMyA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBiYW5rcywgaGFuZGxlU2F2ZSwgaGFuZGxlRGF0ZUNoYW5nZSxcbiAgc3RhdGU6IHtncmFjZVBlcmlvZCwgaGFzY3JlZGl0U2NvcmUsIGNyZWRpdFNjb3JlLCByZXBheW1lbnRQbGFuLCBiYW5rTmFtZSwgYWNjb3VudE51bWJlciwgY2FyZE51bWJlciwgY3Z2LCBleHBEYXRlfX0pID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkVMSUdJQklMSVRZPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRWxpZ2liaWxpdHkgZm9yIGdyYWNlIHBlcmlvZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJncmFjZVBlcmlvZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtncmFjZVBlcmlvZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7WycxIFdlZWsnLCAnMiBXZWVrcycsICczIFdlZWtzJywgJzEgTW9udGgnXS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkRvIHlvdSBoYXZlIGEgY3JlZGl0IHNjb3JlP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJoYXNjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtoYXNjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzEnIHZhbHVlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMCcgdmFsdWU9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc2NyZWRpdFNjb3JlPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgIG5hbWU9XCJjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIklmIHllcywgcGxlYXNlIHByb3ZpZGUgeW91ciBjcmVkaXQgc2NvcmVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGl0U2NvcmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ3JlZGl0IFNjb3JlXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PSdjYXB0aW9uJz5cbiAgICAgICAgICBERUJJVCAmIFJFQ09OQ0lMSUFUSU9OIEFVVEhPUklaQVRJT05cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LXJlcGF5bWVudC1wbGFuXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiSG93IHdvdWxkIHlvdSBsaWtlIHRvIHJlcGF5IHlvdXIgbG9hbj9cIlxuICAgICAgICAgICAgICBuYW1lPVwicmVwYXltZW50UGxhblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXBheW1lbnRQbGFufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9XCJCYW5rXCI+XG4gICAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT1cIkNhcmRcIj5cbiAgICAgICAgICAgICAgICBDYXJkXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgeyhyZXBheW1lbnRQbGFuID09PSAnQ2FyZCcpID9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNhcmROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcmROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jdnZcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdnZ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDVlZcIlxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgaW5wdXRWYXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmlld3M9e1tcInllYXJcIiwgXCJtb250aFwiXX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXhwaXJ5IERhdGVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImV4cERhdGVcIlxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e25ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSArIDMsZGF0ZS5nZXRNb250aCgpKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBEYXRlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWJhbmstbmFtZVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQmFuayBOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYmFua05hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtiYW5rTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtiYW5rcy5tYXAoKGJhbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2Jhbmt9PlxuICAgICAgICAgICAgICAgICAgICB7YmFua31cbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROdW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWNjb3VudCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC8+fVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9J2NhcHRpb24nPlxuICAgICAgICAgIExJU1QgT0YgRE9DVU1FTlRTIFRPIFVQTE9BRFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2VjZWNlYycsIHBhZGRpbmc6ICc4cHgnfX0+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+QSBwYXNzcG9ydCBwaG90b2dyYXBoPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QmFuayBzdGF0ZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5MZXR0ZXIgb2YgZW1wbG95bWVudDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPERyb3B6b25lQXJlYVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgICAgZmlsZXNMaW1pdD17NH1cbiAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdhcHBsaWNhdGlvbi9wZGYnXX1cbiAgICAgICAgICAgICAgc2hvd1ByZXZpZXdzPXt0cnVlfVxuICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17NTAwMDAwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8UXVlc3Rpb25zIGVtYWlsPXtlbWFpbH0vPiAqL31cbiAgICAgIDwvUGFwZXI+XG4gICAgKVxuICB9XG5cbmNvbnN0IEZvcm00ID0gKHtjbGFzc2VzLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtjb25kaXRpb25zQ2hlY2tlZH19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQ29udGFpbmVyfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVEVSTVMgJiBDT05ESVRJT05TXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ2FwdGlvbn0gZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgUGxlYXNlIHJlYWQgdGhyb3VnaCBhbmQgYWNjZXB0IHRoZSB0ZXJtcyAmXG4gICAgICAgICAgICBjb25kaXRpb25zXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDEuIFlvdXIgYWdyZWVtZW50XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIEJ5IHVzaW5nIHRoaXMgU2l0ZSwgeW91IGFncmVlIHRvIGJlIGJvdW5kIGJ5LCBhbmQgdG9cbiAgICAgICAgICAgIGNvbXBseSB3aXRoLCB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucy4gSWYgeW91IGRvXG4gICAgICAgICAgICBub3QgYWdyZWUgdG8gdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMsIHBsZWFzZSBkb1xuICAgICAgICAgICAgbm90IHVzZSB0aGlzIHNpdGUuIFBMRUFTRSBOT1RFOiBXZSByZXNlcnZlIHRoZVxuICAgICAgICAgICAgcmlnaHQsIGF0IG91ciBzb2xlIGRpc2NyZXRpb24sIHRvIGNoYW5nZSwgbW9kaWZ5IG9yXG4gICAgICAgICAgICBvdGhlcndpc2UgYWx0ZXIgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMgYXQgYW55XG4gICAgICAgICAgICB0aW1lLiBVbmxlc3Mgb3RoZXJ3aXNlIGluZGljYXRlZCwgYW1lbmRtZW50cyB3aWxsXG4gICAgICAgICAgICBiZWNvbWUgZWZmZWN0aXZlIGltbWVkaWF0ZWx5LiBQbGVhc2UgcmV2aWV3IHRoZXNlXG4gICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9ucyBwZXJpb2RpY2FsbHkuIFlvdXIgY29udGludWVkXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIFNpdGUgZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIGNoYW5nZXNcbiAgICAgICAgICAgIGFuZC9vciBtb2RpZmljYXRpb25zIHdpbGwgY29uc3RpdHV0ZSB5b3VyIGFjY2VwdGFuY2VcbiAgICAgICAgICAgIG9mIHRoZSByZXZpc2VkIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCB0aGVcbiAgICAgICAgICAgIHJlYXNvbmFibGVuZXNzIG9mIHRoZXNlIHN0YW5kYXJkcyBmb3Igbm90aWNlIG9mXG4gICAgICAgICAgICBjaGFuZ2VzLiBGb3IgeW91ciBpbmZvcm1hdGlvbiwgdGhpcyBwYWdlIHdhcyBsYXN0XG4gICAgICAgICAgICB1cGRhdGVkIGFzIG9mIHRoZSBkYXRlIGF0IHRoZSB0b3Agb2YgdGhlc2UgdGVybXMgYW5kXG4gICAgICAgICAgICBjb25kaXRpb25zLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMi4gUHJpdmFjeVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmV2aWV3IG91ciBQcml2YWN5IFBvbGljeSwgd2hpY2ggYWxzbyBnb3Zlcm5zXG4gICAgICAgICAgICB5b3VyIHZpc2l0IHRvIHRoaXMgU2l0ZSwgdG8gdW5kZXJzdGFuZCBvdXJcbiAgICAgICAgICAgIHByYWN0aWNlcy4gQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmRcbiAgICAgICAgICAgIGJ5LCBhbmQgdG8gY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyxcbiAgICAgICAgICAgIHBsZWFzZSBkbyBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmVcbiAgICAgICAgICAgIHRoZSByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnlcbiAgICAgICAgICAgIG9yIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZGl0aW9uc0NoZWNrZWRcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmRpdGlvbnNDaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPVwiSSBoYXZlIHJlYWQgYW5kIHVuZGVyc3Rvb2QgdGhlIHRlcm1zICYgY29uZGl0aW9uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm01ID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIHN1Y2Nlc3NQYXBlciwgc3RhdGU6IHtkZXNjcmlwdGlvbn19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17c3VjY2Vzc1BhcGVyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Y2Nlc3NUZXh0fSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ2FwdGlvbn0gZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIFlvdSdyZSBvbmUgc3RlcCBjbG9zZXIgdG8gY29tcGxldGluZyB5b3VyIGxvYW4gYXBwbGljYXRpb24sIDxici8+XG4gICAgICAgICAgSW5zdGFrYXNoIHdvdWxkIGxpa2UgdG8gZ2V0IHlvdXIgcGVyc29uYWwgc29jaWFsIG1lZGlhIGRldGFpbHMgYW5kIDUgb2YgeW91ciBjbG9zZSBjb250YWN0cyBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+U09DSUFMIE1FRElBIEhBTkRMRTwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cImlucHV0LXdpdGgtaWNvbi10ZXh0ZmllbGRcIlxuICAgICAgICAgICAgbGFiZWw9XCJGYWNlYm9va1wiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC10d2l0dGVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHdpdHRlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8VHdpdHRlckljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLWluc3RhZ3JhbVwiXG4gICAgICAgICAgICBsYWJlbD1cIkluc3RhZ3JhbVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8SW5zdGFncmFtSWNvbi8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC1zbmFwY2hhdFwiXG4gICAgICAgICAgICBsYWJlbD1cIlNuYXAgQ2hhdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0FjdGl2ZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlJFRkVSRUUgQ09OVEFDVCBJTkZPPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDFcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUyZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUyZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMm1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2ZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzbGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDRcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNGVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm02ID0gKHtjbGFzc2VzLCBkYXNoLCBzdGF0ZToge2ZpcnN0TmFtZX19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnN7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuID5cbiAgICAgICAgICAgICAgICB7Zmlyc3ROYW1lfSEhIVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3Ugd2l0aCB5b3VyIGxvYW4gYXBwbGljYXRpb24gSUQuXG4gICAgICAgICAgICAgIElmIHlvdSB3aXNoIHRvIG1ha2UgZW5xdWlyaWVzIGFib3V0IHlvdXIgbG9hbixcbiAgICAgICAgICAgICAgcGxlYXNlIHNlbmQgYW4gZW1haWwgdG8gYm9ycm93QEluc3RhS2FzaC5jb20uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIFlvdXIgZGFzaGJvYXJkIGlzIHJlYWR5IGZvciB5b3UgdG8gcmV2aWV3IHlvdXIgbG9hbiBoaXN0b3J5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkYXNofT5cbiAgICAgICAgICAgICAgQmFjayB0byBEYXNoYm9hcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTG9hbkFwcGxpY2F0aW9uRm9ybSk7XG5cbnsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICA8VGV4dEZpZWxkXG4gIGRpc2FibGVkPXshcmVnaW9uID8gdHJ1ZSA6IGZhbHNlfVxuICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jaXR5XCJcbiAgc2VsZWN0XG4gIGxhYmVsPVwiQ3VycmVudCBDaXR5XCJcbiAgbmFtZT1cImNpdHlcIlxuICB2YWx1ZT17Y2l0eX1cbiAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgSW5wdXRMYWJlbFByb3BzPXt7XG4gIHNocmluazogdHJ1ZSxcbiAgfX1cbiAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgPlxuICB7cmVnaW9uID8gKHRoaXMuZ2V0Q2l0eShyZWdpb24pLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5LmNpdHlfaWR9PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpIDogKHRoaXMuZ2V0Q2l0eSgxKS5tYXAoKGNpdHkpID0+IChcbiAgPE1lbnVJdGVtIGtleT17Y2l0eS5jaXR5X2lkfSB2YWx1ZT17Y2l0eS5uYW1lX2VufT5cbiAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyx3aWR0aDonMTAwJSd9fT5cbiAgPGRpdj57Y2l0eS5uYW1lX2VufTwvZGl2PjxkaXY+e2NpdHkubmFtZV9hcn08L2Rpdj5cbiAgPC9kaXY+XG4gIDwvTWVudUl0ZW0+XG4gICkpKX1cbiAgPC9UZXh0RmllbGQ+XG48L0dyaWQ+ICovfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==