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

        var date = _this.state.expDate.toLocaleDateString().split('/');

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
          exp_date: "".concat(date[2].slice(2)).concat(numeral__WEBPACK_IMPORTED_MODULE_42___default()(date[0]).format('00'))
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
    value: function handleDateChange(expDate) {
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
          lineNumber: 398,
          columnNumber: 19
        }
      }, "PLEASE CLICK TO AGREE TO THE TERMS AND CONDITIONS");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        container: true,
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
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
          lineNumber: 403,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: classes.stepContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: classes.bigContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
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
          lineNumber: 413,
          columnNumber: 21
        }
      }, steps.map(function (label) {
        return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420,
            columnNumber: 27
          }
        }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
          StepIconComponent: CustomStepIcon,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421,
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
          lineNumber: 427,
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
          lineNumber: 429,
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
          lineNumber: 438,
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
              lineNumber: 446,
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
              lineNumber: 447,
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
          lineNumber: 455,
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
              lineNumber: 463,
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
              lineNumber: 464,
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
          lineNumber: 473,
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
              lineNumber: 481,
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
              lineNumber: 482,
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
          lineNumber: 492,
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
              lineNumber: 500,
              columnNumber: 25
            }
          }, __jsx(Form4, {
            classes: classes,
            handleTerms: handleTerms,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 501,
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
          lineNumber: 508,
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
              lineNumber: 516,
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
              lineNumber: 517,
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
          lineNumber: 525,
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
              lineNumber: 533,
              columnNumber: 25
            }
          }, __jsx(Form6, {
            classes: classes,
            dash: goToDashboard,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 534,
              columnNumber: 27
            }
          }));
        };
      }), __jsx("div", {
        className: classes.flexBar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541,
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
          lineNumber: 543,
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
          lineNumber: 554,
          columnNumber: 23
        }
      }, loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__["default"], {
        size: 24,
        className: classes.buttonProgress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
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
      lineNumber: 582,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 11
    }
  }, "Loan Application Instructions"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 11
    }
  }, "Welcome to the InstaKash application portal ", firstName, ","), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 11
    }
  }, "we will walk you through the easy process as you continue your application."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 11
    }
  }, "Please have the following documents avalable:"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 13
    }
  }, "Basic information about yourself"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 13
    }
  }, "For personal loans, specify employer, employer refrence number, your current salary "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 13
    }
  }, "A picture of you for your loan profile")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 11
    }
  }, "Your application is automatically saved as you go through the process"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 11
    }
  }, "For inquiries please send an email to borrow@InstaKash.com"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 11
    }
  }, "Application requirements"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 11
    }
  }, "The following are specific requirements for applying for POP lending"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 13
    }
  }, "Read instructions"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 13
    }
  }, "Provide all other personal information"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 13
    }
  }, "Employment history "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 13
    }
  }, "BVN "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 13
    }
  }, "Bank details"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 13
    }
  }, "Documents for account statements")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 11
    }
  }, "Click next to proceed to the next stage of your InstaKash application")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
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
        lineNumber: 631,
        columnNumber: 15
      }
    }),
    label: Label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
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
      lineNumber: 651,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
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
      lineNumber: 654,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
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
      lineNumber: 656,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
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
      lineNumber: 672,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
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
      lineNumber: 688,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
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
      lineNumber: 705,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
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
      lineNumber: 722,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
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
      lineNumber: 739,
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
      lineNumber: 756,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
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
        lineNumber: 762,
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
        lineNumber: 769,
        columnNumber: 24
      }
    }, "By clicking the button you opt in for sms notification of offerings sms charges apply"),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
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
      lineNumber: 778,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
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
      lineNumber: 794,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
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
      lineNumber: 810,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826,
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
      lineNumber: 827,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842,
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
      lineNumber: 843,
      columnNumber: 11
    }
  }, _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__.map(function (region) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: region.region_id,
      value: region.region_id,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858,
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
        lineNumber: 859,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 19
      }
    }, region.name_en), __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
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
      lineNumber: 867,
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
      lineNumber: 868,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 869,
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
        lineNumber: 873,
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
        lineNumber: 880,
        columnNumber: 24
      }
    }, "Please indicate if your address has changed in the past 3 years."),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
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
      lineNumber: 896,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
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
      lineNumber: 898,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
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
      lineNumber: 900,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "male",
    value: "male",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 13
    }
  }, "Male"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "female",
    value: "female",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 13
    }
  }, "Female"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 922,
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
      lineNumber: 923,
      columnNumber: 11
    }
  }, edulist.map(function (level) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: level,
      value: level,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
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
      lineNumber: 944,
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
      lineNumber: 945,
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
      lineNumber: 968,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
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
      lineNumber: 970,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
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
      lineNumber: 972,
      columnNumber: 13
    }
  }, ['1 Week', '2 Weeks', '3 Weeks', '1 Month'].map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: item,
      value: item,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 986,
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
      lineNumber: 992,
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
      lineNumber: 993,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1006,
      columnNumber: 15
    }
  }, "Yes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 15
    }
  }, "No"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
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
      lineNumber: 1015,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031,
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
      lineNumber: 1034,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
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
      lineNumber: 1036,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: "Bank",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 15
    }
  }, "Bank"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: "Card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
      columnNumber: 15
    }
  }, "Card"))), repaymentPlan === 'Card' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
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
      lineNumber: 1060,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
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
    InputProps: {
      inputProps: {
        maxlength: 3,
        minlength: 3
      }
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1098,
      columnNumber: 15
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__["DatePicker"], {
    autoOk: true,
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
      lineNumber: 1099,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1116,
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
      lineNumber: 1117,
      columnNumber: 15
    }
  }, banks.map(function (bank, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index,
      value: bank,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1133,
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
      lineNumber: 1139,
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
      lineNumber: 1140,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
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
      lineNumber: 1161,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
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
      lineNumber: 1163,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 17
    }
  }, "A passport photograph"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 17
    }
  }, "Bank statement"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 17
    }
  }, "Letter of employment")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
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
      lineNumber: 1172,
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
      lineNumber: 1188,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: 24
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1190,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "caption",
    className: classes.formLabel,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1191,
      columnNumber: 11
    }
  }, "TERMS & CONDITIONS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
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
      lineNumber: 1202,
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
      lineNumber: 1211,
      columnNumber: 11
    }
  }, "1. Your agreement"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218,
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
      lineNumber: 1236,
      columnNumber: 11
    }
  }, "2. Privacy"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 11
    }
  }, "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1264,
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
        lineNumber: 1267,
        columnNumber: 15
      }
    }),
    label: "I have read and understood the terms & conditions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1265,
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
      lineNumber: 1284,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: successPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.successText,
    variant: "body1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1286,
      columnNumber: 9
    }
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.successText,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1289,
      columnNumber: 9
    }
  }, "You're one step closer to completing your loan application, ", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1290,
      columnNumber: 71
    }
  }), "Instakash would like to get your personal social media details and 5 of your close contacts information.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1294,
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
      lineNumber: 1295,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1296,
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
          lineNumber: 1305,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1306,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1297,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1312,
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
          lineNumber: 1321,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1322,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1313,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1328,
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
          lineNumber: 1337,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1338,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1329,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1344,
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
          lineNumber: 1353,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1354,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1345,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1361,
      columnNumber: 7
    }
  }, "REFEREE CONTACT INFO"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1362,
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
      lineNumber: 1364,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1365,
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
      lineNumber: 1366,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1380,
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
      lineNumber: 1381,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1394,
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
      lineNumber: 1395,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1409,
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
      lineNumber: 1410,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1425,
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
      lineNumber: 1427,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1428,
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
      lineNumber: 1429,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1443,
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
      lineNumber: 1444,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1457,
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
      lineNumber: 1458,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1472,
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
      lineNumber: 1473,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1488,
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
      lineNumber: 1490,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1491,
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
      lineNumber: 1492,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1506,
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
      lineNumber: 1507,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1520,
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
      lineNumber: 1521,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1535,
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
      lineNumber: 1536,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1551,
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
      lineNumber: 1553,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1554,
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
      lineNumber: 1555,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1569,
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
      lineNumber: 1570,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1583,
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
      lineNumber: 1584,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1598,
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
      lineNumber: 1599,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1614,
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
      lineNumber: 1616,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1617,
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
      lineNumber: 1618,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1632,
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
      lineNumber: 1633,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1646,
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
      lineNumber: 1647,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1661,
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
      lineNumber: 1662,
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
      lineNumber: 1683,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1684,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    container: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1685,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1686,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1687,
      columnNumber: 13
    }
  }, "Congratulations", " ", __jsx("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1689,
      columnNumber: 15
    }
  }, firstName, "!!!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1694,
      columnNumber: 13
    }
  }, "An email has been sent to you with your loan application ID. If you wish to make enquiries about your loan, please send an email to borrow@InstaKash.com."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1699,
      columnNumber: 13
    }
  }, "Your dashboard is ready for you to review your loan history"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    variant: "outlined",
    onClick: dash,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1702,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJEYXRlIiwiZmlsZXMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3BsaXQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJzbGljZSIsImZvcm1hdCIsIkFwaSIsImt5Y1VwZGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImFwaURhdGEiLCJsb2FuQXBwbGljYXRpb24iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwia2V5cyIsImkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZG9jVXBsb2FkIiwiZXJyb3IiLCJjbGVhciIsInBhcnNlIiwiZWR1bGlzdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVRlcm1zIiwiYmluZCIsImNsYXNzZXMiLCJzdGVwcyIsImZpeGVkSGVpZ2h0UGFwZXIiLCJjbHN4IiwiTGFiZWwiLCJtYXAiLCJsYWJlbCIsInN1Ym1pdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJpdGVtcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlQmFjayIsInN0ZXBBY3Rpb25zIiwiQ29tcG9uZW50IiwiRm9ybTAiLCJGb3JtMSIsInNocmluayIsIm1hcmdpbkxlZnQiLCJyZWdpb25zIiwibmFtZV9lbiIsIm5hbWVfYXIiLCJGb3JtMiIsImxldmVsIiwiRm9ybTMiLCJpdGVtIiwiaW5wdXRQcm9wcyIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJpbmRleCIsIkZvcm00IiwiYm9yZGVyIiwib3ZlcmZsb3dZIiwiZm9udFdlaWdodCIsIkZvcm01Iiwic3RhcnRBZG9ybm1lbnQiLCJGb3JtNiIsImRhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCLEdBRGxCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbUMsU0FESCxRQUZGLENBREYsRUFRRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBUkYsRUFhRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGdCQUFZLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBYkYsRUFnQkUsTUFBQyxpRUFBRDtBQUFRLGFBQVMsTUFBakI7QUFBa0IsV0FBTyxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBRWdJLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBaEJGLENBREYsQ0FERixDQURGLENBREY7QUE0QkQsQ0E3QkQ7O01BQU1ELEs7QUErQlMzSSw4SUFBVSxDQUFDeEQsTUFBRCxDQUFWLENBQW1CNkQsbUJBQW5CLENBQWY7QUFFQTtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLjA4YWJlNDAyYmRkY2ZlZDEwNDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tICdyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzJztcbmltcG9ydCB7YW5pbWF0ZWQsIGNvbmZpZ30gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IFN0ZXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBJY29uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0Ryb3B6b25lQXJlYX0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0FjdGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNBY3RpdmUnO1xuaW1wb3J0IEFjY291bnRCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94JztcbmltcG9ydCBTdXBlcnZpc2VkVXNlckNpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1cGVydmlzZWRVc2VyQ2lyY2xlJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XG5pbXBvcnQgQmFjayBmcm9tIFwiLi9jb21tb24vQmFja1wiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9xdWVzdGlvbnMnO1xuLy8gaW1wb3J0IFBheXN0YWNrIGZyb20gJy4uL3V0aWxzL2F4aW9zLnBheXN0YWNrJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQgcmVnaW9ucyBmcm9tICcuL2RhdGEvc2F1ZGlfcmVnaW9uc19saXRlLmpzb24nO1xuaW1wb3J0IGluZGlnbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvaW5kaWdvJztcblxuY29uc3QgQW5pbWF0ZWRHcmlkID0gYW5pbWF0ZWQoR3JpZClcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ2xvY2FsLXN0b3JhZ2UnKVxuY29uc3QgYmFja2dyb3VuZFNoYXBlID0gcmVxdWlyZShcIi4uL3B1YmxpYy9pbWFnZXMvc2hhcGUuc3ZnXCIpO1xuXG5udW1lcmFsLmRlZmF1bHRGb3JtYXQoXCIwLDAwMFwiKTtcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbXCJBMTAwXCJdLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjAgNDAwcHhcIixcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIHBhZGRpbmc6ICcyMCAwJyxcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcblxuICBncmlkOiB7XG4gICAgbWFyZ2luOiAwXG4gIH0sXG4gIHNtYWxsQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG4gIGJpZ0NvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBzdGVwQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIHN0ZXBHcmlkOiB7XG4gICAgd2lkdGg6IFwiODAlXCJcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIG91dGxpbmVkQnV0dG9tOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfSxcbiAgc3RlcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCI6e1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9XG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgc3VjY2Vzc1BhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgfSxcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBtYXJnaW46ICc1cHggMCcsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgZm9ybVBhcGVyOiB7XG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBmb3JtTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICBjb2xvcjp0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuICBmb3JtU3ViTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZvcm1DYXB0aW9uOntcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZpeGVkSGVpZ2h0OiB7XG4gICAgaGVpZ2h0OiAyNTAsXG4gIH0sXG4gIHRvcEluZm86IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDQyXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH0sXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIGJvcmRlckNvbHVtbjoge1xuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVtcIjEwMFwiXX1gLFxuICAgIHBhZGRpbmdCb3R0b206IDI0LFxuICAgIG1hcmdpbkJvdHRvbTogMjRcbiAgfSxcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gdG9wOiAnNTAlJyxcbiAgICAvLyBsZWZ0OiAnNTAlJyxcbiAgICAvLyBtYXJnaW5Ub3A6IC0xMixcbiAgICAvLyBtYXJnaW5MZWZ0OiAtMTIsXG4gIH0sXG4gIGZsZXhCYXI6IHtcbiAgICBtYXJnaW5Ub3A6IDMyLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCdcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBDdXN0b21TdGVwSWNvbiA9IHdpdGhTdHlsZXMoe1xuICB0ZXh0OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9XG59KShTdGVwSWNvbilcblxuXG5jb25zdCBnZXRTdGVwcyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcIklOU1RSVUNUSU9OU1wiLCBcIlBFUlNPTkFMIElORk9cIiwgXCJERU1PR1JBUEhJQ1NcIiwgXCJFTElHSUJJTElUWVwiLCBcIkFHUkVFTUVOVFwiLCBcIk9USEVSIElORk9cIiwgXCJDT01QTEVURVwiXTtcbn07XG5cbmNvbnN0IGJhbmtzID0gWydUaGUgTmF0aW9uYWwgQ29tbWVyY2lhbCBCYW5rJywgJ1RoZSBTYXVkaSBCcml0aXNoIEJhbmsnLCAnU2F1ZGkgSW52ZXN0bWVudCBCYW5rJywnYWxpbm1hIGJhbmsnLCdCYW5xdWUgU2F1ZGkgRnJhbnNpJywnUml5YWQgQmFuaycsICdTYW1iYSBGaW5hbmNpYWwgR3JvdXAgKFNhbWJhKScsICdhbGF3d2FsIGJhbmsnLCAnQWwgUmFqaGkgQmFuaycsICdBcmFiIE5hdGlvbmFsIEJhbmsnLCAnQmFuayBBbEJpbGFkJywgJ0JhbmsgQWxKYXppcmEnLCAnR3VsZiBJbnRlcm5hdGlvbmFsIEJhbmsgU2F1ZGkgQXJpYmlhIChHSUItU0EpJ11cblxuY2xhc3MgTG9hbkFwcGxpY2F0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGFjdGl2ZVN0ZXA6IDAsXG4gICAgdGVybXNDaGVja2VkOiBmYWxzZSxcbiAgICBjb25kaXRpb25zQ2hlY2tlZDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZmlyc3ROYW1lOiB0aGlzLnByb3BzLmZpcnN0TmFtZSxcbiAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3RfbmFtZSxcbiAgICBOYXRpb25hbElkTm86IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA/IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA6ICcnLFxuICAgIGRvYjogdGhpcy5wcm9wcy5kYXRhLmRvYiA/IHRoaXMucHJvcHMuZGF0YS5kb2IgOiAnJyxcbiAgICBlbWFpbDogdGhpcy5wcm9wcy5lbWFpbCxcbiAgICBtb2JpbGU6IHRoaXMucHJvcHMuZGF0YS5tb2JpbGUgPyB0aGlzLnByb3BzLmRhdGEubW9iaWxlIDogJycsXG4gICAgYWRkcmVzczogdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgPyB0aGlzLnByb3BzLmRhdGEuYWRkcmVzcyA6ICcnLFxuICAgIHJlZ2lvbjogJycsXG4gICAgZ2VuZGVyOiB0aGlzLnByb3BzLmRhdGEuZ2VuZGVyID8gdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA6ICcnLFxuICAgIGVkdWNhdGlvbjogJycsXG4gICAgZXRobmljaXR5OicnLFxuICAgIGVtcGxveWVlUmVmZXJlbmNlOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfcmVmZXJlbmNlID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA6ICcnLFxuICAgIGVtcGxveWVlTnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA6ICcnLFxuICAgIHNhbGFyeTogdGhpcy5wcm9wcy5kYXRhLnNhbGFyeSA/IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgOiAnJyxcbiAgICBxdWVzdGlvbnM6JycsXG4gICAgbW9iaWxlQ2hlY2s6IGZhbHNlLFxuICAgIGFkZHJlc3NDaGVjazogZmFsc2UsXG4gICAgZ3JhY2VQZXJpb2Q6ICcnLFxuICAgIGhhc2NyZWRpdFNjb3JlOiBmYWxzZSxcbiAgICBjcmVkaXRTY29yZTogJycsXG4gICAgcmVwYXltZW50UGxhbjogJycsXG4gICAgYmFua05hbWU6IHRoaXMucHJvcHMuZGF0YS5iYW5rID8gdGhpcy5wcm9wcy5kYXRhLmJhbmsgOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgPyB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgOiAnJyxcbiAgICBiYW5rczogYmFua3MsXG4gICAgY2FyZE51bWJlcjogJycsXG4gICAgY3Z2OiAnJyxcbiAgICBleHBEYXRlOiBuZXcgRGF0ZSgpLFxuICAgIGZpbGVzOiBbXVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGlmICh0aGlzLnNvdXJjZSkge1xuICAgIC8vICAgICAgIHRoaXMuc291cmNlLmNhbmNlbCgnQ2FuY2VsIHByZXZpb3VzIHJlcXVlc3QnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB0aGlzLnNvdXJjZSA9IFBheXN0YWNrLnNvdXJjZSgpXG4gICAgLy8gUGF5c3RhY2suYmFua3MoeyBjYW5jZWxUb2tlbjogdGhpcy5zb3VyY2UudG9rZW4gfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHtiYW5rczogcmVzcG9uc2UuZGF0YS5kYXRhfSlcbiAgICAvLyB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgY29uc3QgZm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSgnZm9ybXN0YXRlJykpXG4gICAgaWYgKGZvcm1EYXRhKXt0aGlzLnNldFN0YXRlKHsuLi5mb3JtRGF0YX0pfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gcmV0dXJuIHRoaXMuc291cmNlLmNhbmNlbCgncGF5c3RhY2sgcmVxdWVzdCBjYW5jZWxlZCcpXG4gIH1cblxuICBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IHN0YXRlLmFjdGl2ZVN0ZXAgKyAxXG4gICAgfSkpO1xuICAgIGNvbnN0IGRhdGEgPSB7Li4udGhpcy5zdGF0ZX1cbiAgICBkZWxldGUgZGF0YS5iYW5rc1xuICAgIGRlbGV0ZSBkYXRhLmZpbGVzXG4gICAgZGVsZXRlIGRhdGEubG9hZGluZ1xuICAgIGRlbGV0ZSBkYXRhLmNhcmROdW1iZXJcbiAgICBkZWxldGUgZGF0YS5jdnZcbiAgICBkZWxldGUgZGF0YS5leHBEYXRlXG4gICAgaWYoZGF0YS5hY3RpdmVTdGVwIDwgNCkge1xuICAgIGxvY2FsU3RvcmFnZSgnZm9ybXN0YXRlJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpfVxuICB9O1xuXG4gIGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgYWN0aXZlU3RlcDogc3RhdGUuYWN0aXZlU3RlcCAtIDFcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVTdGVwOiAwXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlVGVybXMgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC5jaGVja2VkLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBzdGVwQWN0aW9ucygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0KSB7XG4gICAgICByZXR1cm4gXCJBY2NlcHRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gMykge1xuICAgICAgcmV0dXJuIFwiU3VibWl0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDYpIHtcbiAgICAgIHJldHVybiBcIkRvbmVcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiTmV4dFwiO1xuICB9XG5cbiAgZ29Ub0Rhc2hib2FyZCA9IGV2ZW50ID0+IHtcbiAgICBSb3V0ZXIucmVsb2FkKClcbiAgfTtcblxuICBnZXRDaXR5ID0gaWQgPT4ge1xuICAgIHJldHVybiBjaXRpZXMuZmlsdGVyKGNpdHkgPT4ge1xuICAgICAgcmV0dXJuIGNpdHkucmVnaW9uX2lkID09PSBpZFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlKGZpbGVzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsZXM6IGZpbGVzLH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0ZUNoYW5nZShleHBEYXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXhwRGF0ZX0pXG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICB9XG5cbiAgc3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA0ICYmIHRoaXMuc3RhdGUuYWN0aXZlU3RlcCAhPT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTmV4dCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDYpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvVG9EYXNoYm9hcmQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0ICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcbiAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnN0YXRlLmV4cERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkuc3BsaXQoJy8nKVxuICAgICAgY29uc3Qga3ljRm9ybSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIG5hdGlvbmFsX2lkOiB0aGlzLnN0YXRlLk5hdGlvbmFsSWRObyxcbiAgICAgICAgc2FsYXJ5OiB0aGlzLnN0YXRlLnNhbGFyeSxcbiAgICAgICAgZW1wbG95ZWVfcmVmZXJlbmNlOiB0aGlzLnN0YXRlLmVtcGxveWVlUmVmZXJlbmNlLFxuICAgICAgICBlbXBsb3llZV9udW1iZXI6IHRoaXMuc3RhdGUuZW1wbG95ZWVOdW1iZXIsXG4gICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgIGJhbms6IHRoaXMuc3RhdGUuYmFua05hbWUgPyB0aGlzLnN0YXRlLmJhbmtOYW1lIDogJ0R1bW15IERhdGEnLFxuICAgICAgICBtb2JpbGU6IHRoaXMuc3RhdGUubW9iaWxlLFxuICAgICAgICBkb2I6IHRoaXMuc3RhdGUuZG9iLFxuICAgICAgICB0ZW51cmU6IHRoaXMucHJvcHMuZGF0YS50ZW51cmUsXG4gICAgICAgIGluaXRpYWxfYW1vdW50OiB0aGlzLnByb3BzLmRhdGEuaW5pdGlhbF9hbW91bnQsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgYWNjb3VudF9udW1iZXI6IHRoaXMuc3RhdGUuYWNjb3VudE51bWJlciA/IHRoaXMuc3RhdGUuYWNjb3VudE51bWJlciA6ICcxMjM0NTY3ODkwJyxcbiAgICAgICAgcGFuOiB0aGlzLnN0YXRlLmNhcmROdW1iZXIsXG4gICAgICAgIGN2djogdGhpcy5zdGF0ZS5jdnYsXG4gICAgICAgIGV4cF9kYXRlOiBgJHtkYXRlWzJdLnNsaWNlKDIpfSR7bnVtZXJhbChkYXRlWzBdKS5mb3JtYXQoJzAwJyl9YFxuICAgICAgfVxuICAgICAgQXBpLmt5Y1VwZGF0ZShKU09OLnN0cmluZ2lmeShreWNGb3JtKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xuICAgICAgICAgIFwiZW1haWxcIjogZGF0YS5lbWFpbCxcbiAgICAgICAgICBcImFtb3VudFwiOiBkYXRhLmluaXRpYWxfYW1vdW50LFxuICAgICAgICAgIFwibG9hbl9jb3NcIjogXCIxXCIsXG4gICAgICAgICAgXCJ0ZW51cmVcIjogZGF0YS50ZW51cmUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaURhdGEgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIEFwaS5sb2FuQXBwbGljYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IFtcIm5hdGlvbmFsX2lkXCIsICdzdGF0ZW1lbnQnLCAnY29udHJhY3QnLCAncGF5c2xpcCddXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5zdGF0ZS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICBrZXlzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb2FuX2lkJywgcmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgZmlsZXMuLi4nKTtcbiAgICAgICAgICBBcGkuZG9jVXBsb2FkKGZvcm1EYXRhKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e2NvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxuICAgICAgfSl9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZWR1bGlzdCA9IFsnTm9uZScsICdQcmltYXJ5JywgJ1NlY29uZGFyeScsICdEaXBsb21hJywgJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ0RvY3RvcmF0ZSddO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlO1xuICAgIGNvbnN0IGhhbmRsZVRlcm1zID0gdGhpcy5oYW5kbGVUZXJtc1xuICAgIGNvbnN0IGdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XG4gICAgY29uc3QgeyBhY3RpdmVTdGVwLCBmaXJzdE5hbWUsIGxvYWRpbmcsIHRlcm1zQ2hlY2tlZCwgY29uZGl0aW9uc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZml4ZWRIZWlnaHRQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5maXhlZEhlaWdodCk7XG4gICAgY29uc3Qgc3VjY2Vzc1BhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLnN1Y2Nlc3NQYXBlcik7XG4gICAgY29uc3QgTGFiZWwgPSA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlBMRUFTRSBDTElDSyBUTyBBR1JFRSBUTyBUSEUgVEVSTVMgQU5EIENPTkRJVElPTlM8L1R5cG9ncmFwaHk+XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIHsvKiA8QmFjayAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnN0ZXBwZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q3VzdG9tU3RlcEljb259PntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gdmFsaWRhdGU9XCJ0cnVlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0UGFwZXI9e2ZpeGVkSGVpZ2h0UGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBMYWJlbD17TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtc0NoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDF9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDEpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAyfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAyKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkdWxpc3Q9e2VkdWxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAzKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFua3M9e2JhbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNhdmU9e3RoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURhdGVDaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNCkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDV9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDUpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm01XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzUGFwZXI9e3N1Y2Nlc3NQYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDZ9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDYpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm02XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoPXtnb1RvRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCA1ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAwICYmICF0ZXJtc0NoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgJiYgIWNvbmRpdGlvbnNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblByb2dyZXNzfS8+IDogdGhpcy5zdGVwQWN0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb3JtMCA9ICh7Zml4ZWRIZWlnaHRQYXBlciwgY2xhc3NlcywgZmlyc3ROYW1lLCB0ZXJtc0NoZWNrZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIExhYmVsfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+TG9hbiBBcHBsaWNhdGlvbiBJbnN0cnVjdGlvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBJbnN0YUthc2ggYXBwbGljYXRpb24gcG9ydGFsIHtmaXJzdE5hbWV9LFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIHdlIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgZWFzeSBwcm9jZXNzIGFzIHlvdSBjb250aW51ZSB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBoYXZlIHRoZSBmb2xsb3dpbmcgZG9jdW1lbnRzIGF2YWxhYmxlOlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgeW91cnNlbGY8L2xpPlxuICAgICAgICAgICAgPGxpPkZvciBwZXJzb25hbCBsb2Fucywgc3BlY2lmeSBlbXBsb3llciwgZW1wbG95ZXIgcmVmcmVuY2UgbnVtYmVyLCB5b3VyIGN1cnJlbnQgc2FsYXJ5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QSBwaWN0dXJlIG9mIHlvdSBmb3IgeW91ciBsb2FuIHByb2ZpbGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uIGlzIGF1dG9tYXRpY2FsbHkgc2F2ZWQgYXMgeW91IGdvIHRocm91Z2ggdGhlIHByb2Nlc3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBGb3IgaW5xdWlyaWVzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cInN1YnRpdGxlMVwiID5BcHBsaWNhdGlvbiByZXF1aXJlbWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIGFwcGx5aW5nIGZvciBQT1AgbGVuZGluZ1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+UmVhZCBpbnN0cnVjdGlvbnM8L2xpPlxuICAgICAgICAgICAgPGxpPlByb3ZpZGUgYWxsIG90aGVyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgIDxsaT5FbXBsb3ltZW50IGhpc3RvcnkgPC9saT5cbiAgICAgICAgICAgIDxsaT5CVk4gPC9saT5cbiAgICAgICAgICAgIDxsaT5CYW5rIGRldGFpbHM8L2xpPlxuICAgICAgICAgICAgPGxpPkRvY3VtZW50cyBmb3IgYWNjb3VudCBzdGF0ZW1lbnRzPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBDbGljayBuZXh0IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RhZ2Ugb2YgeW91ciBJbnN0YUthc2ggYXBwbGljYXRpb25cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwidGVybXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e0xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5jb25zdCBGb3JtMSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtmaXJzdE5hbWUsIGxhc3ROYW1lLFxuICBkb2IsIG1vYmlsZSwgbW9iaWxlQ2hlY2ssIGVtcGxveWVlUmVmZXJlbmNlLCBlbXBsb3llZU51bWJlciwgc2FsYXJ5LCBhZGRyZXNzLFxuICBlbWFpbCwgcmVnaW9uLCBhZGRyZXNzQ2hlY2ssIE5hdGlvbmFsSWROb31cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlBFUlNPTkFMIElORk9STUFUSU9OPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1uaW4taW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmF0aW9uYWwtaWQtbnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiTmF0aW9uYWxJZE5vXCJcbiAgICAgICAgICAgIHZhbHVlPXtOYXRpb25hbElkTm99XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1kb2ItaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIEJpcnRoXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJkZC9tbS95eXl5XCJcbiAgICAgICAgICAgIG5hbWU9XCJkb2JcIlxuICAgICAgICAgICAgdmFsdWU9e2RvYn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJywgcGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xMHB4JywgbWFyZ2luTGVmdDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVDaGVja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3R5bGU9e3tmb250U2l6ZTogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IG9wdCBpbiBmb3Igc21zIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgb2Ygb2ZmZXJpbmdzIHNtcyBjaGFyZ2VzIGFwcGx5XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZVJlZmVyZW5jZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLXJlZmVyZW5jZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVyIEFkZHJlc3NcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1wbG95ZXJzIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlTnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1wbG95ZWUtbnVtYmVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOdW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbXBsb3llZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cInNhbGFyeVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNhbGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIlNhbGFyeVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17c2FsYXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9udGhseSBTYWxhcnkgQW1vdW50XCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWRkcmVzc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlBoeXNpY2FsIEFkZHJlc3MgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBob21lIGFkZHJlc3MsIHBsZWFzZSBzcGVjaWZ5IHN0cmVldCBuYW1lIG9yIHVzZSBsb2NhdGlvbiBmaW5kZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZWdpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgUmVnaW9uXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWdpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUmVnaW9uXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlZ2lvbnMubWFwKChyZWdpb24pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cmVnaW9uLnJlZ2lvbl9pZH0gdmFsdWU9e3JlZ2lvbi5yZWdpb25faWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PntyZWdpb24ubmFtZV9lbn08L2Rpdj48ZGl2PntyZWdpb24ubmFtZV9hcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTE1cHgnLCBtYXJnaW5MZWZ0OjAsIG1hcmdpblJpZ2h0OjB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZGRyZXNzQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgaW5kaWNhdGUgaWYgeW91ciBhZGRyZXNzIGhhcyBjaGFuZ2VkIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgICAzIHllYXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuXG4gIClcbn1cblxuY29uc3QgRm9ybTIgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgZWR1bGlzdCwgc3RhdGU6IHtnZW5kZXIsIGVkdWNhdGlvbiwgZXRobmljaXR5fX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+REVNT0dSQVBISUNTPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ2VuZGVyXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwaWNrIHlvdXIgZ2VuZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nbWFsZScgdmFsdWU9J21hbGUnPlxuICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nZmVtYWxlJyB2YWx1ZT0nZmVtYWxlJz5cbiAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBuYW1lPVwiZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtlZHVjYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2VkdWxpc3QubWFwKChsZXZlbCkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsZXZlbH0gdmFsdWU9e2xldmVsfT5cbiAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cImV0aG5pY2l0eVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWV0aG5pY2l0eVwiXG4gICAgICAgICAgICBsYWJlbD1cIkV0aG5pY2l0eVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2V0aG5pY2l0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEV0aG5pY2l0eVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm0zID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGJhbmtzLCBoYW5kbGVTYXZlLCBoYW5kbGVEYXRlQ2hhbmdlLFxuICBzdGF0ZToge2dyYWNlUGVyaW9kLCBoYXNjcmVkaXRTY29yZSwgY3JlZGl0U2NvcmUsIHJlcGF5bWVudFBsYW4sIGJhbmtOYW1lLCBhY2NvdW50TnVtYmVyLCBjYXJkTnVtYmVyLCBjdnYsIGV4cERhdGV9fSkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+RUxJR0lCSUxJVFk8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ3JhY2VQZXJpb2RcIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbGlnaWJpbGl0eSBmb3IgZ3JhY2UgcGVyaW9kXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dyYWNlUGVyaW9kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtbJzEgV2VlaycsICcyIFdlZWtzJywgJzMgV2Vla3MnLCAnMSBNb250aCddLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRG8geW91IGhhdmUgYSBjcmVkaXQgc2NvcmU/XCJcbiAgICAgICAgICAgICAgbmFtZT1cImhhc2NyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2hhc2NyZWRpdFNjb3JlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9e3RydWV9PlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzY3JlZGl0U2NvcmU/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgbmFtZT1cImNyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiSWYgeWVzLCBwbGVhc2UgcHJvdmlkZSB5b3VyIGNyZWRpdCBzY29yZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDcmVkaXQgU2NvcmVcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9J2NhcHRpb24nPlxuICAgICAgICAgIERFQklUICYgUkVDT05DSUxJQVRJT04gQVVUSE9SSVpBVElPTlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVwYXltZW50LXBsYW5cIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJIb3cgd291bGQgeW91IGxpa2UgdG8gcmVwYXkgeW91ciBsb2FuP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXBheW1lbnRQbGFuXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlcGF5bWVudFBsYW59XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScxJyB2YWx1ZT1cIkJhbmtcIj5cbiAgICAgICAgICAgICAgICBCYW5rXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzAnIHZhbHVlPVwiQ2FyZFwiPlxuICAgICAgICAgICAgICAgIENhcmRcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7KHJlcGF5bWVudFBsYW4gPT09ICdDYXJkJykgP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FyZE51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWN2dlwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNWVlwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N2dn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENWVlwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogMywgbWlubGVuZ3RoOiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGF1dG9Pa1xuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2aWV3cz17W1wieWVhclwiLCBcIm1vbnRoXCJdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFeHBpcnkgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZXhwRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpICsgMyxkYXRlLmdldE1vbnRoKCkpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cERhdGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtYmFuay1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5rTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JhbmtOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JhbmtzLm1hcCgoYmFuaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17YmFua30+XG4gICAgICAgICAgICAgICAgICAgIHtiYW5rfVxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgTElTVCBPRiBET0NVTUVOVFMgVE8gVVBMT0FEXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZWNlY2VjJywgcGFkZGluZzogJzhweCd9fT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5BIHBhc3Nwb3J0IHBob3RvZ3JhcGg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5CYW5rIHN0YXRlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkxldHRlciBvZiBlbXBsb3ltZW50PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8RHJvcHpvbmVBcmVhXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYXZlfVxuICAgICAgICAgICAgICBmaWxlc0xpbWl0PXs0fVxuICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddfVxuICAgICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XG4gICAgICAgICAgICAgIG1heEZpbGVTaXplPXs1MDAwMDAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIDxRdWVzdGlvbnMgZW1haWw9e2VtYWlsfS8+ICovfVxuICAgICAgPC9QYXBlcj5cbiAgICApXG4gIH1cblxuY29uc3QgRm9ybTQgPSAoe2NsYXNzZXMsIGhhbmRsZVRlcm1zLCBzdGF0ZToge2NvbmRpdGlvbnNDaGVja2VkfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBURVJNUyAmIENPTkRJVElPTlNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmVhZCB0aHJvdWdoIGFuZCBhY2NlcHQgdGhlIHRlcm1zICZcbiAgICAgICAgICAgIGNvbmRpdGlvbnNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMzMwLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMS4gWW91ciBhZ3JlZW1lbnRcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnksIGFuZCB0b1xuICAgICAgICAgICAgY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLiBJZiB5b3UgZG9cbiAgICAgICAgICAgIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucywgcGxlYXNlIGRvXG4gICAgICAgICAgICBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmUgdGhlXG4gICAgICAgICAgICByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnkgb3JcbiAgICAgICAgICAgIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAyLiBQcml2YWN5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZXZpZXcgb3VyIFByaXZhY3kgUG9saWN5LCB3aGljaCBhbHNvIGdvdmVybnNcbiAgICAgICAgICAgIHlvdXIgdmlzaXQgdG8gdGhpcyBTaXRlLCB0byB1bmRlcnN0YW5kIG91clxuICAgICAgICAgICAgcHJhY3RpY2VzLiBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZFxuICAgICAgICAgICAgYnksIGFuZCB0byBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLFxuICAgICAgICAgICAgcGxlYXNlIGRvIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZVxuICAgICAgICAgICAgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeVxuICAgICAgICAgICAgb3Igb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25kaXRpb25zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZGl0aW9uc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9XCJJIGhhdmUgcmVhZCBhbmQgdW5kZXJzdG9vZCB0aGUgdGVybXMgJiBjb25kaXRpb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybTUgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgc3VjY2Vzc1BhcGVyLCBzdGF0ZToge2Rlc2NyaXB0aW9ufX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdWNjZXNzUGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3VjY2Vzc1RleHR9IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Y2Nlc3NUZXh0fSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgWW91J3JlIG9uZSBzdGVwIGNsb3NlciB0byBjb21wbGV0aW5nIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiwgPGJyLz5cbiAgICAgICAgICBJbnN0YWthc2ggd291bGQgbGlrZSB0byBnZXQgeW91ciBwZXJzb25hbCBzb2NpYWwgbWVkaWEgZGV0YWlscyBhbmQgNSBvZiB5b3VyIGNsb3NlIGNvbnRhY3RzIGluZm9ybWF0aW9uLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5TT0NJQUwgTUVESUEgSEFORExFPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXR3aXR0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJUd2l0dGVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtaW5zdGFncmFtXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXNuYXBjaGF0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU25hcCBDaGF0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zQWN0aXZlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UkVGRVJFRSBDT05UQUNUIElORk88L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAyXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA1XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gIClcbn1cblxuY29uc3QgRm9ybTYgPSAoe2NsYXNzZXMsIGRhc2gsIHN0YXRlOiB7Zmlyc3ROYW1lfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbENvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9uc3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gPlxuICAgICAgICAgICAgICAgIHtmaXJzdE5hbWV9ISEhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdSB3aXRoIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiBJRC5cbiAgICAgICAgICAgICAgSWYgeW91IHdpc2ggdG8gbWFrZSBlbnF1aXJpZXMgYWJvdXQgeW91ciBsb2FuLFxuICAgICAgICAgICAgICBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgWW91ciBkYXNoYm9hcmQgaXMgcmVhZHkgZm9yIHlvdSB0byByZXZpZXcgeW91ciBsb2FuIGhpc3RvcnlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2Rhc2h9PlxuICAgICAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMb2FuQXBwbGljYXRpb25Gb3JtKTtcblxuey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gIDxUZXh0RmllbGRcbiAgZGlzYWJsZWQ9eyFyZWdpb24gPyB0cnVlIDogZmFsc2V9XG4gIGlkPVwib3V0bGluZWQtc2VsZWN0LWNpdHlcIlxuICBzZWxlY3RcbiAgbGFiZWw9XCJDdXJyZW50IENpdHlcIlxuICBuYW1lPVwiY2l0eVwiXG4gIHZhbHVlPXtjaXR5fVxuICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgc2hyaW5rOiB0cnVlLFxuICB9fVxuICB2YXJpYW50PVwib3V0bGluZWRcIlxuICA+XG4gIHtyZWdpb24gPyAodGhpcy5nZXRDaXR5KHJlZ2lvbikubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkuY2l0eV9pZH0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSkgOiAodGhpcy5nZXRDaXR5KDEpLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5Lm5hbWVfZW59PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpfVxuICA8L1RleHRGaWVsZD5cbjwvR3JpZD4gKi99XG4iXSwic291cmNlUm9vdCI6IiJ9