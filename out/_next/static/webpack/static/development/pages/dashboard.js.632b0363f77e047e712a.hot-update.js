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
        max: 999,
        min: 100
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJEYXRlIiwiZmlsZXMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic3BsaXQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJzbGljZSIsImZvcm1hdCIsIkFwaSIsImt5Y1VwZGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImFwaURhdGEiLCJsb2FuQXBwbGljYXRpb24iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwia2V5cyIsImkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZG9jVXBsb2FkIiwiZXJyb3IiLCJjbGVhciIsInBhcnNlIiwiZWR1bGlzdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVRlcm1zIiwiYmluZCIsImNsYXNzZXMiLCJzdGVwcyIsImZpeGVkSGVpZ2h0UGFwZXIiLCJjbHN4IiwiTGFiZWwiLCJtYXAiLCJsYWJlbCIsInN1Ym1pdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJpdGVtcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVEYXRlQ2hhbmdlIiwiaGFuZGxlQmFjayIsInN0ZXBBY3Rpb25zIiwiQ29tcG9uZW50IiwiRm9ybTAiLCJGb3JtMSIsInNocmluayIsIm1hcmdpbkxlZnQiLCJyZWdpb25zIiwibmFtZV9lbiIsIm5hbWVfYXIiLCJGb3JtMiIsImxldmVsIiwiRm9ybTMiLCJpdGVtIiwiaW5wdXRQcm9wcyIsIm1heCIsIm1pbiIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJpbmRleCIsIkZvcm00IiwiYm9yZGVyIiwib3ZlcmZsb3dZIiwiZm9udFdlaWdodCIsIkZvcm01Iiwic3RhcnRBZG9ybm1lbnQiLCJGb3JtNiIsImRhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNrQixHQURsQixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR21DLFNBREgsUUFGRixDQURGLEVBUUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlLQVJGLEVBYUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixnQkFBWSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQWJGLEVBZ0JFLE1BQUMsaUVBQUQ7QUFBUSxhQUFTLE1BQWpCO0FBQWtCLFdBQU8sRUFBQyxVQUExQjtBQUFxQyxXQUFPLEVBQUVnSSxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRixDQURGLENBREYsQ0FERixDQURGO0FBNEJELENBN0JEOztNQUFNRCxLO0FBK0JTM0ksOElBQVUsQ0FBQ3hELE1BQUQsQ0FBVixDQUFtQjZELG1CQUFuQixDQUFmO0FBRUE7QUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QlUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy42MzJiMDM2M2Y3N2UwNDdlNzEyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSAncmVhY3Qtc3ByaW5nL3JlbmRlcnByb3BzLmNqcyc7XG5pbXBvcnQge2FuaW1hdGVkLCBjb25maWd9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWxcIjtcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcbmltcG9ydCBTdGVwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwSWNvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtEcm9wem9uZUFyZWF9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnNBY3RpdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zQWN0aXZlJztcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCc7XG5pbXBvcnQgU3VwZXJ2aXNlZFVzZXJDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdXBlcnZpc2VkVXNlckNpcmNsZSc7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xuaW1wb3J0IEJhY2sgZnJvbSBcIi4vY29tbW9uL0JhY2tcIjtcbmltcG9ydCBudW1lcmFsIGZyb20gXCJudW1lcmFsXCI7XG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvcXVlc3Rpb25zJztcbi8vIGltcG9ydCBQYXlzdGFjayBmcm9tICcuLi91dGlscy9heGlvcy5wYXlzdGFjayc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2F4aW9zLnNlcnZpY2UnO1xuaW1wb3J0IHJlZ2lvbnMgZnJvbSAnLi9kYXRhL3NhdWRpX3JlZ2lvbnNfbGl0ZS5qc29uJztcbmltcG9ydCBpbmRpZ28gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2luZGlnbyc7XG5cbmNvbnN0IEFuaW1hdGVkR3JpZCA9IGFuaW1hdGVkKEdyaWQpXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCdsb2NhbC1zdG9yYWdlJylcbmNvbnN0IGJhY2tncm91bmRTaGFwZSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvaW1hZ2VzL3NoYXBlLnN2Z1wiKTtcblxubnVtZXJhbC5kZWZhdWx0Rm9ybWF0KFwiMCwwMDBcIik7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W1wiQTEwMFwiXSxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCIwIDQwMHB4XCIsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBwYWRkaW5nOiAnMjAgMCcsXG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG5cbiAgZ3JpZDoge1xuICAgIG1hcmdpbjogMFxuICB9LFxuICBzbWFsbENvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBiaWdDb250YWluZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbiAgc3RlcENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxuICBzdGVwR3JpZDoge1xuICAgIHdpZHRoOiBcIjgwJVwiXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9LFxuICBvdXRsaW5lZEJ1dHRvbToge1xuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIHN0ZXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIGZsZXhHcm93OiAwLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuXG4gIHBhcGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHN1Y2Nlc3NQYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gIH0sXG4gIHN1Y2Nlc3NUZXh0OiB7XG4gICAgbWFyZ2luOiAnNXB4IDAnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGZvcm1QYXBlcjoge1xuICAgIG1hcmdpbjogMCxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgY29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgfSxcbiAgZm9ybVN1YkxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmb3JtQ2FwdGlvbjp7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmaXhlZEhlaWdodDoge1xuICAgIGhlaWdodDogMjUwLFxuICB9LFxuICB0b3BJbmZvOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0MlxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9LFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBib3JkZXJDb2x1bW46IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbXCIxMDBcIl19YCxcbiAgICBwYWRkaW5nQm90dG9tOiAyNCxcbiAgICBtYXJnaW5Cb3R0b206IDI0XG4gIH0sXG4gIGJ1dHRvblByb2dyZXNzOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIHRvcDogJzUwJScsXG4gICAgLy8gbGVmdDogJzUwJScsXG4gICAgLy8gbWFyZ2luVG9wOiAtMTIsXG4gICAgLy8gbWFyZ2luTGVmdDogLTEyLFxuICB9LFxuICBmbGV4QmFyOiB7XG4gICAgbWFyZ2luVG9wOiAzMixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIixcbiAgICB3aWR0aDogJzQwJScsXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIjp7XG4gICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgQ3VzdG9tU3RlcEljb24gPSB3aXRoU3R5bGVzKHtcbiAgdGV4dDoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfVxufSkoU3RlcEljb24pXG5cblxuY29uc3QgZ2V0U3RlcHMgPSAoKSA9PiB7XG4gIHJldHVybiBbXCJJTlNUUlVDVElPTlNcIiwgXCJQRVJTT05BTCBJTkZPXCIsIFwiREVNT0dSQVBISUNTXCIsIFwiRUxJR0lCSUxJVFlcIiwgXCJBR1JFRU1FTlRcIiwgXCJPVEhFUiBJTkZPXCIsIFwiQ09NUExFVEVcIl07XG59O1xuXG5jb25zdCBiYW5rcyA9IFsnVGhlIE5hdGlvbmFsIENvbW1lcmNpYWwgQmFuaycsICdUaGUgU2F1ZGkgQnJpdGlzaCBCYW5rJywgJ1NhdWRpIEludmVzdG1lbnQgQmFuaycsJ2FsaW5tYSBiYW5rJywnQmFucXVlIFNhdWRpIEZyYW5zaScsJ1JpeWFkIEJhbmsnLCAnU2FtYmEgRmluYW5jaWFsIEdyb3VwIChTYW1iYSknLCAnYWxhd3dhbCBiYW5rJywgJ0FsIFJhamhpIEJhbmsnLCAnQXJhYiBOYXRpb25hbCBCYW5rJywgJ0JhbmsgQWxCaWxhZCcsICdCYW5rIEFsSmF6aXJhJywgJ0d1bGYgSW50ZXJuYXRpb25hbCBCYW5rIFNhdWRpIEFyaWJpYSAoR0lCLVNBKSddXG5cbmNsYXNzIExvYW5BcHBsaWNhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBhY3RpdmVTdGVwOiAwLFxuICAgIHRlcm1zQ2hlY2tlZDogZmFsc2UsXG4gICAgY29uZGl0aW9uc0NoZWNrZWQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGZpcnN0TmFtZTogdGhpcy5wcm9wcy5maXJzdE5hbWUsXG4gICAgbGFzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5sYXN0X25hbWUsXG4gICAgTmF0aW9uYWxJZE5vOiB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgPyB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgOiAnJyxcbiAgICBkb2I6IHRoaXMucHJvcHMuZGF0YS5kb2IgPyB0aGlzLnByb3BzLmRhdGEuZG9iIDogJycsXG4gICAgZW1haWw6IHRoaXMucHJvcHMuZW1haWwsXG4gICAgbW9iaWxlOiB0aGlzLnByb3BzLmRhdGEubW9iaWxlID8gdGhpcy5wcm9wcy5kYXRhLm1vYmlsZSA6ICcnLFxuICAgIGFkZHJlc3M6IHRoaXMucHJvcHMuZGF0YS5hZGRyZXNzID8gdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgOiAnJyxcbiAgICByZWdpb246ICcnLFxuICAgIGdlbmRlcjogdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA/IHRoaXMucHJvcHMuZGF0YS5nZW5kZXIgOiAnJyxcbiAgICBlZHVjYXRpb246ICcnLFxuICAgIGV0aG5pY2l0eTonJyxcbiAgICBlbXBsb3llZVJlZmVyZW5jZTogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9yZWZlcmVuY2UgOiAnJyxcbiAgICBlbXBsb3llZU51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9udW1iZXIgOiAnJyxcbiAgICBzYWxhcnk6IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgPyB0aGlzLnByb3BzLmRhdGEuc2FsYXJ5IDogJycsXG4gICAgcXVlc3Rpb25zOicnLFxuICAgIG1vYmlsZUNoZWNrOiBmYWxzZSxcbiAgICBhZGRyZXNzQ2hlY2s6IGZhbHNlLFxuICAgIGdyYWNlUGVyaW9kOiAnJyxcbiAgICBoYXNjcmVkaXRTY29yZTogZmFsc2UsXG4gICAgY3JlZGl0U2NvcmU6ICcnLFxuICAgIHJlcGF5bWVudFBsYW46ICcnLFxuICAgIGJhbmtOYW1lOiB0aGlzLnByb3BzLmRhdGEuYmFuayA/IHRoaXMucHJvcHMuZGF0YS5iYW5rIDogJycsXG4gICAgYWNjb3VudE51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyIDogJycsXG4gICAgYmFua3M6IGJhbmtzLFxuICAgIGNhcmROdW1iZXI6ICcnLFxuICAgIGN2djogJycsXG4gICAgZXhwRGF0ZTogbmV3IERhdGUoKSxcbiAgICBmaWxlczogW11cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAvLyAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoJ0NhbmNlbCBwcmV2aW91cyByZXF1ZXN0Jyk7XG4gICAgLy8gICB9XG4gICAgLy8gdGhpcy5zb3VyY2UgPSBQYXlzdGFjay5zb3VyY2UoKVxuICAgIC8vIFBheXN0YWNrLmJhbmtzKHsgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7YmFua3M6IHJlc3BvbnNlLmRhdGEuZGF0YX0pXG4gICAgLy8gfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScpKVxuICAgIGlmIChmb3JtRGF0YSl7dGhpcy5zZXRTdGF0ZSh7Li4uZm9ybURhdGF9KX07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHJldHVybiB0aGlzLnNvdXJjZS5jYW5jZWwoJ3BheXN0YWNrIHJlcXVlc3QgY2FuY2VsZWQnKVxuICB9XG5cbiAgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwICsgMVxuICAgIH0pKTtcbiAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGV9XG4gICAgZGVsZXRlIGRhdGEuYmFua3NcbiAgICBkZWxldGUgZGF0YS5maWxlc1xuICAgIGRlbGV0ZSBkYXRhLmxvYWRpbmdcbiAgICBkZWxldGUgZGF0YS5jYXJkTnVtYmVyXG4gICAgZGVsZXRlIGRhdGEuY3Z2XG4gICAgZGVsZXRlIGRhdGEuZXhwRGF0ZVxuICAgIGlmKGRhdGEuYWN0aXZlU3RlcCA8IDQpIHtcbiAgICBsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKX1cbiAgfTtcblxuICBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IHN0YXRlLmFjdGl2ZVN0ZXAgLSAxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlU3RlcDogMFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRlcm1zID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCwgbG9hZGluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgc3RlcEFjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCkge1xuICAgICAgcmV0dXJuIFwiQWNjZXB0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDMpIHtcbiAgICAgIHJldHVybiBcIlN1Ym1pdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA2KSB7XG4gICAgICByZXR1cm4gXCJEb25lXCI7XG4gICAgfVxuICAgIHJldHVybiBcIk5leHRcIjtcbiAgfVxuXG4gIGdvVG9EYXNoYm9hcmQgPSBldmVudCA9PiB7XG4gICAgUm91dGVyLnJlbG9hZCgpXG4gIH07XG5cbiAgZ2V0Q2l0eSA9IGlkID0+IHtcbiAgICByZXR1cm4gY2l0aWVzLmZpbHRlcihjaXR5ID0+IHtcbiAgICAgIHJldHVybiBjaXR5LnJlZ2lvbl9pZCA9PT0gaWRcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZShmaWxlcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzOiBmaWxlcyx9KTtcbiAgfVxuXG4gIGhhbmRsZURhdGVDaGFuZ2UoZXhwRGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2V4cERhdGV9KVxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgfVxuXG4gIHN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCAhPT0gNCAmJiB0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDYpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU5leHQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5nb1RvRGFzaGJvYXJkKClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pXG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5zdGF0ZS5leHBEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpLnNwbGl0KCcvJylcbiAgICAgIGNvbnN0IGt5Y0Zvcm0gPSB7XG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc3RhdGUubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBuYXRpb25hbF9pZDogdGhpcy5zdGF0ZS5OYXRpb25hbElkTm8sXG4gICAgICAgIHNhbGFyeTogdGhpcy5zdGF0ZS5zYWxhcnksXG4gICAgICAgIGVtcGxveWVlX3JlZmVyZW5jZTogdGhpcy5zdGF0ZS5lbXBsb3llZVJlZmVyZW5jZSxcbiAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiB0aGlzLnN0YXRlLmVtcGxveWVlTnVtYmVyLFxuICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICBiYW5rOiB0aGlzLnN0YXRlLmJhbmtOYW1lID8gdGhpcy5zdGF0ZS5iYW5rTmFtZSA6ICdEdW1teSBEYXRhJyxcbiAgICAgICAgbW9iaWxlOiB0aGlzLnN0YXRlLm1vYmlsZSxcbiAgICAgICAgZG9iOiB0aGlzLnN0YXRlLmRvYixcbiAgICAgICAgdGVudXJlOiB0aGlzLnByb3BzLmRhdGEudGVudXJlLFxuICAgICAgICBpbml0aWFsX2Ftb3VudDogdGhpcy5wcm9wcy5kYXRhLmluaXRpYWxfYW1vdW50LFxuICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLmFkZHJlc3MsXG4gICAgICAgIGFjY291bnRfbnVtYmVyOiB0aGlzLnN0YXRlLmFjY291bnROdW1iZXIgPyB0aGlzLnN0YXRlLmFjY291bnROdW1iZXIgOiAnMTIzNDU2Nzg5MCcsXG4gICAgICAgIHBhbjogdGhpcy5zdGF0ZS5jYXJkTnVtYmVyLFxuICAgICAgICBjdnY6IHRoaXMuc3RhdGUuY3Z2LFxuICAgICAgICBleHBfZGF0ZTogYCR7ZGF0ZVsyXS5zbGljZSgyKX0ke251bWVyYWwoZGF0ZVswXSkuZm9ybWF0KCcwMCcpfWBcbiAgICAgIH1cbiAgICAgIEFwaS5reWNVcGRhdGUoSlNPTi5zdHJpbmdpZnkoa3ljRm9ybSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcbiAgICAgICAgICBcImVtYWlsXCI6IGRhdGEuZW1haWwsXG4gICAgICAgICAgXCJhbW91bnRcIjogZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgICBcImxvYW5fY29zXCI6IFwiMVwiLFxuICAgICAgICAgIFwidGVudXJlXCI6IGRhdGEudGVudXJlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcGlEYXRhIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBBcGkubG9hbkFwcGxpY2F0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBbXCJuYXRpb25hbF9pZFwiLCAnc3RhdGVtZW50JywgJ2NvbnRyYWN0JywgJ3BheXNsaXAnXVxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuc3RhdGUuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAga2V5c1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXS5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9hbl9pZCcsIHJlc3BvbnNlLmRhdGEuZGF0YS5pZClcbiAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGZpbGVzLi4uJyk7XG4gICAgICAgICAgQXBpLmRvY1VwbG9hZChmb3JtRGF0YSkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3I9Pntjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pXG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dCgpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgIH0pfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVkdWxpc3QgPSBbJ05vbmUnLCAnUHJpbWFyeScsICdTZWNvbmRhcnknLCAnRGlwbG9tYScsICdCYWNoZWxvcnMnLCAnTWFzdGVycycsICdEb2N0b3JhdGUnXTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZTtcbiAgICBjb25zdCBoYW5kbGVUZXJtcyA9IHRoaXMuaGFuZGxlVGVybXNcbiAgICBjb25zdCBnb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcylcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xuICAgIGNvbnN0IHsgYWN0aXZlU3RlcCwgZmlyc3ROYW1lLCBsb2FkaW5nLCB0ZXJtc0NoZWNrZWQsIGNvbmRpdGlvbnNDaGVja2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpeGVkSGVpZ2h0UGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuZml4ZWRIZWlnaHQpO1xuICAgIGNvbnN0IHN1Y2Nlc3NQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5zdWNjZXNzUGFwZXIpO1xuICAgIGNvbnN0IExhYmVsID0gPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5QTEVBU0UgQ0xJQ0sgVE8gQUdSRUUgVE8gVEhFIFRFUk1TIEFORCBDT05ESVRJT05TPC9UeXBvZ3JhcGh5PlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn1cbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICB7LyogPEJhY2sgLz4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RlcENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5zdGVwcGVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZUxhYmVsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcHMubWFwKGxhYmVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0N1c3RvbVN0ZXBJY29ufT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RlcHBlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IHZhbGlkYXRlPVwidHJ1ZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0wXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEhlaWdodFBhcGVyPXtmaXhlZEhlaWdodFBhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgTGFiZWw9e0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybXNDaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc30vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAxfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAxKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gMn1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMikgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZHVsaXN0PXtlZHVsaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gM31cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMykgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmtzPXtiYW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlPXt0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEYXRlQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDR9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDQpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm00XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA1fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA1KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1BhcGVyPXtzdWNjZXNzUGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA2fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA2KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaD17Z29Ub0Rhc2hib2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwIDwgNSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gMCAmJiAhdGVybXNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0ICYmICFjb25kaXRpb25zQ2hlY2tlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Qcm9ncmVzc30vPiA6IHRoaXMuc3RlcEFjdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9ybTAgPSAoe2ZpeGVkSGVpZ2h0UGFwZXIsIGNsYXNzZXMsIGZpcnN0TmFtZSwgdGVybXNDaGVja2VkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVRlcm1zLCBMYWJlbH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9IHtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwic3VidGl0bGUxXCIgPkxvYW4gQXBwbGljYXRpb24gSW5zdHJ1Y3Rpb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgSW5zdGFLYXNoIGFwcGxpY2F0aW9uIHBvcnRhbCB7Zmlyc3ROYW1lfSxcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICB3ZSB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIGVhc3kgcHJvY2VzcyBhcyB5b3UgY29udGludWUgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBQbGVhc2UgaGF2ZSB0aGUgZm9sbG93aW5nIGRvY3VtZW50cyBhdmFsYWJsZTpcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkJhc2ljIGluZm9ybWF0aW9uIGFib3V0IHlvdXJzZWxmPC9saT5cbiAgICAgICAgICAgIDxsaT5Gb3IgcGVyc29uYWwgbG9hbnMsIHNwZWNpZnkgZW1wbG95ZXIsIGVtcGxveWVyIHJlZnJlbmNlIG51bWJlciwgeW91ciBjdXJyZW50IHNhbGFyeSA8L2xpPlxuICAgICAgICAgICAgPGxpPkEgcGljdHVyZSBvZiB5b3UgZm9yIHlvdXIgbG9hbiBwcm9maWxlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbiBpcyBhdXRvbWF0aWNhbGx5IHNhdmVkIGFzIHlvdSBnbyB0aHJvdWdoIHRoZSBwcm9jZXNzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgRm9yIGlucXVpcmllcyBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+QXBwbGljYXRpb24gcmVxdWlyZW1lbnRzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgc3BlY2lmaWMgcmVxdWlyZW1lbnRzIGZvciBhcHBseWluZyBmb3IgUE9QIGxlbmRpbmdcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlJlYWQgaW5zdHJ1Y3Rpb25zPC9saT5cbiAgICAgICAgICAgIDxsaT5Qcm92aWRlIGFsbCBvdGhlciBwZXJzb25hbCBpbmZvcm1hdGlvbjwvbGk+XG4gICAgICAgICAgICA8bGk+RW1wbG95bWVudCBoaXN0b3J5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QlZOIDwvbGk+XG4gICAgICAgICAgICA8bGk+QmFuayBkZXRhaWxzPC9saT5cbiAgICAgICAgICAgIDxsaT5Eb2N1bWVudHMgZm9yIGFjY291bnQgc3RhdGVtZW50czwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgQ2xpY2sgbmV4dCB0byBwcm9jZWVkIHRvIHRoZSBuZXh0IHN0YWdlIG9mIHlvdXIgSW5zdGFLYXNoIGFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgbmFtZT1cInRlcm1zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGVybXNDaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPXtMYWJlbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuY29uc3QgRm9ybTEgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIHN0YXRlOiB7Zmlyc3ROYW1lLCBsYXN0TmFtZSxcbiAgZG9iLCBtb2JpbGUsIG1vYmlsZUNoZWNrLCBlbXBsb3llZVJlZmVyZW5jZSwgZW1wbG95ZWVOdW1iZXIsIHNhbGFyeSwgYWRkcmVzcyxcbiAgZW1haWwsIHJlZ2lvbiwgYWRkcmVzc0NoZWNrLCBOYXRpb25hbElkTm99XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5QRVJTT05BTCBJTkZPUk1BVElPTjwvVHlwb2dyYXBoeT5cblxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1sYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbmluLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hdGlvbmFsLWlkLW51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIk5hdGlvbmFsSWROb1wiXG4gICAgICAgICAgICB2YWx1ZT17TmF0aW9uYWxJZE5vfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZG9iLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBvZiBCaXJ0aFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgZm9ybWF0PVwiZGQvbW0veXl5eVwiXG4gICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgIHZhbHVlPXtkb2J9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17bW9iaWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsIHBhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMTBweCcsIG1hcmdpbkxlZnQ6MH19XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZUNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bW9iaWxlQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBvcHQgaW4gZm9yIHNtcyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgIG9mIG9mZmVyaW5ncyBzbXMgY2hhcmdlcyBhcHBseVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVSZWZlcmVuY2VcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbXBsb3llZS1yZWZlcmVuY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbXBsb3llciBBZGRyZXNzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVSZWZlcmVuY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtcGxveWVycyBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZU51bWJlclwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLW51bWJlclwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVlIE51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlTnVtYmVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJzYWxhcnlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zYWxhcnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJTYWxhcnlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3NhbGFyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1vbnRobHkgU2FsYXJ5IEFtb3VudFwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFkZHJlc3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJQaHlzaWNhbCBBZGRyZXNzIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaG9tZSBhZGRyZXNzLCBwbGVhc2Ugc3BlY2lmeSBzdHJlZXQgbmFtZSBvciB1c2UgbG9jYXRpb24gZmluZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVnaW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJDdXJyZW50IFJlZ2lvblwiXG4gICAgICAgICAgICBuYW1lPVwicmVnaW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZWdpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZ2lvblwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyZWdpb25zLm1hcCgocmVnaW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3JlZ2lvbi5yZWdpb25faWR9IHZhbHVlPXtyZWdpb24ucmVnaW9uX2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgPGRpdj57cmVnaW9uLm5hbWVfZW59PC9kaXY+PGRpdj57cmVnaW9uLm5hbWVfYXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3BhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwifX0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xNXB4JywgbWFyZ2luTGVmdDowLCBtYXJnaW5SaWdodDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0NoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWRkcmVzc0NoZWNrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBzdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGluZGljYXRlIGlmIHlvdXIgYWRkcmVzcyBoYXMgY2hhbmdlZCBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgICAgICAgMyB5ZWFycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cblxuICApXG59XG5cbmNvbnN0IEZvcm0yID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGVkdWxpc3QsIHN0YXRlOiB7Z2VuZGVyLCBlZHVjYXRpb24sIGV0aG5pY2l0eX19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkRFTU9HUkFQSElDUzwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdlbmRlclwiXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgcGljayB5b3VyIGdlbmRlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J21hbGUnIHZhbHVlPSdtYWxlJz5cbiAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J2ZlbWFsZScgdmFsdWU9J2ZlbWFsZSc+XG4gICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgbmFtZT1cImVkdWNhdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17ZWR1Y2F0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtlZHVsaXN0Lm1hcCgobGV2ZWwpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bGV2ZWx9IHZhbHVlPXtsZXZlbH0+XG4gICAgICAgICAgICAgICAge2xldmVsfVxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJldGhuaWNpdHlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1ldGhuaWNpdHlcIlxuICAgICAgICAgICAgbGFiZWw9XCJFdGhuaWNpdHlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtldGhuaWNpdHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFdGhuaWNpdHlcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5jb25zdCBGb3JtMyA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBiYW5rcywgaGFuZGxlU2F2ZSwgaGFuZGxlRGF0ZUNoYW5nZSxcbiAgc3RhdGU6IHtncmFjZVBlcmlvZCwgaGFzY3JlZGl0U2NvcmUsIGNyZWRpdFNjb3JlLCByZXBheW1lbnRQbGFuLCBiYW5rTmFtZSwgYWNjb3VudE51bWJlciwgY2FyZE51bWJlciwgY3Z2LCBleHBEYXRlfX0pID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkVMSUdJQklMSVRZPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRWxpZ2liaWxpdHkgZm9yIGdyYWNlIHBlcmlvZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJncmFjZVBlcmlvZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtncmFjZVBlcmlvZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7WycxIFdlZWsnLCAnMiBXZWVrcycsICczIFdlZWtzJywgJzEgTW9udGgnXS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkRvIHlvdSBoYXZlIGEgY3JlZGl0IHNjb3JlP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJoYXNjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtoYXNjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzEnIHZhbHVlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMCcgdmFsdWU9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc2NyZWRpdFNjb3JlPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgIG5hbWU9XCJjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIklmIHllcywgcGxlYXNlIHByb3ZpZGUgeW91ciBjcmVkaXQgc2NvcmVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGl0U2NvcmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ3JlZGl0IFNjb3JlXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PSdjYXB0aW9uJz5cbiAgICAgICAgICBERUJJVCAmIFJFQ09OQ0lMSUFUSU9OIEFVVEhPUklaQVRJT05cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LXJlcGF5bWVudC1wbGFuXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiSG93IHdvdWxkIHlvdSBsaWtlIHRvIHJlcGF5IHlvdXIgbG9hbj9cIlxuICAgICAgICAgICAgICBuYW1lPVwicmVwYXltZW50UGxhblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXBheW1lbnRQbGFufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9XCJCYW5rXCI+XG4gICAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT1cIkNhcmRcIj5cbiAgICAgICAgICAgICAgICBDYXJkXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgeyhyZXBheW1lbnRQbGFuID09PSAnQ2FyZCcpID9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNhcmROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcmROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jdnZcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdnZ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDVlZcIlxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IDk5OSwgbWluOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgYXV0b09rXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0VmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdzPXtbXCJ5ZWFyXCIsIFwibW9udGhcIl19XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkV4cGlyeSBEYXRlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBEYXRlXCJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e2RhdGV9XG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgKyAzLGRhdGUuZ2V0TW9udGgoKSl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwRGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgOlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1iYW5rLW5hbWVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFuayBOYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImJhbmtOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmFua05hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YmFua3MubWFwKChiYW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtiYW5rfT5cbiAgICAgICAgICAgICAgICAgICAge2Jhbmt9XG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFjY291bnROdW1iZXJcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQWNjb3VudCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnROdW1iZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PSdjYXB0aW9uJz5cbiAgICAgICAgICBMSVNUIE9GIERPQ1VNRU5UUyBUTyBVUExPQURcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxQYXBlciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNlY2VjZWMnLCBwYWRkaW5nOiAnOHB4J319PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkEgcGFzc3BvcnQgcGhvdG9ncmFwaDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkJhbmsgc3RhdGVtZW50PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TGV0dGVyIG9mIGVtcGxveW1lbnQ8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezR9XG4gICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnYXBwbGljYXRpb24vcGRmJ119XG4gICAgICAgICAgICAgIHNob3dQcmV2aWV3cz17dHJ1ZX1cbiAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezUwMDAwMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7LyogPFF1ZXN0aW9ucyBlbWFpbD17ZW1haWx9Lz4gKi99XG4gICAgICA8L1BhcGVyPlxuICAgIClcbiAgfVxuXG5jb25zdCBGb3JtNCA9ICh7Y2xhc3NlcywgaGFuZGxlVGVybXMsIHN0YXRlOiB7Y29uZGl0aW9uc0NoZWNrZWR9fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRFUk1TICYgQ09ORElUSU9OU1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNhcHRpb259IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZWFkIHRocm91Z2ggYW5kIGFjY2VwdCB0aGUgdGVybXMgJlxuICAgICAgICAgICAgY29uZGl0aW9uc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMzAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2NjY1wiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAxLiBZb3VyIGFncmVlbWVudFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZCBieSwgYW5kIHRvXG4gICAgICAgICAgICBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuIElmIHlvdSBkb1xuICAgICAgICAgICAgbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLCBwbGVhc2UgZG9cbiAgICAgICAgICAgIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZSB0aGVcbiAgICAgICAgICAgIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeSBvclxuICAgICAgICAgICAgb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDIuIFByaXZhY3lcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgUGxlYXNlIHJldmlldyBvdXIgUHJpdmFjeSBQb2xpY3ksIHdoaWNoIGFsc28gZ292ZXJuc1xuICAgICAgICAgICAgeW91ciB2aXNpdCB0byB0aGlzIFNpdGUsIHRvIHVuZGVyc3RhbmQgb3VyXG4gICAgICAgICAgICBwcmFjdGljZXMuIEJ5IHVzaW5nIHRoaXMgU2l0ZSwgeW91IGFncmVlIHRvIGJlIGJvdW5kXG4gICAgICAgICAgICBieSwgYW5kIHRvIGNvbXBseSB3aXRoLCB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cbiAgICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMsXG4gICAgICAgICAgICBwbGVhc2UgZG8gbm90IHVzZSB0aGlzIHNpdGUuIFBMRUFTRSBOT1RFOiBXZSByZXNlcnZlXG4gICAgICAgICAgICB0aGUgcmlnaHQsIGF0IG91ciBzb2xlIGRpc2NyZXRpb24sIHRvIGNoYW5nZSwgbW9kaWZ5XG4gICAgICAgICAgICBvciBvdGhlcndpc2UgYWx0ZXIgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMgYXQgYW55XG4gICAgICAgICAgICB0aW1lLiBVbmxlc3Mgb3RoZXJ3aXNlIGluZGljYXRlZCwgYW1lbmRtZW50cyB3aWxsXG4gICAgICAgICAgICBiZWNvbWUgZWZmZWN0aXZlIGltbWVkaWF0ZWx5LiBQbGVhc2UgcmV2aWV3IHRoZXNlXG4gICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9ucyBwZXJpb2RpY2FsbHkuIFlvdXIgY29udGludWVkXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIFNpdGUgZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIGNoYW5nZXNcbiAgICAgICAgICAgIGFuZC9vciBtb2RpZmljYXRpb25zIHdpbGwgY29uc3RpdHV0ZSB5b3VyIGFjY2VwdGFuY2VcbiAgICAgICAgICAgIG9mIHRoZSByZXZpc2VkIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCB0aGVcbiAgICAgICAgICAgIHJlYXNvbmFibGVuZXNzIG9mIHRoZXNlIHN0YW5kYXJkcyBmb3Igbm90aWNlIG9mXG4gICAgICAgICAgICBjaGFuZ2VzLiBGb3IgeW91ciBpbmZvcm1hdGlvbiwgdGhpcyBwYWdlIHdhcyBsYXN0XG4gICAgICAgICAgICB1cGRhdGVkIGFzIG9mIHRoZSBkYXRlIGF0IHRoZSB0b3Agb2YgdGhlc2UgdGVybXMgYW5kXG4gICAgICAgICAgICBjb25kaXRpb25zLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmRpdGlvbnNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25kaXRpb25zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD1cIkkgaGF2ZSByZWFkIGFuZCB1bmRlcnN0b29kIHRoZSB0ZXJtcyAmIGNvbmRpdGlvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtNSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBzdWNjZXNzUGFwZXIsIHN0YXRlOiB7ZGVzY3JpcHRpb259fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e3N1Y2Nlc3NQYXBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWNjZXNzVGV4dH0gdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3VjY2Vzc1RleHR9IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBZb3UncmUgb25lIHN0ZXAgY2xvc2VyIHRvIGNvbXBsZXRpbmcgeW91ciBsb2FuIGFwcGxpY2F0aW9uLCA8YnIvPlxuICAgICAgICAgIEluc3Rha2FzaCB3b3VsZCBsaWtlIHRvIGdldCB5b3VyIHBlcnNvbmFsIHNvY2lhbCBtZWRpYSBkZXRhaWxzIGFuZCA1IG9mIHlvdXIgY2xvc2UgY29udGFjdHMgaW5mb3JtYXRpb24uXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlNPQ0lBTCBNRURJQSBIQU5ETEU8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJpbnB1dC13aXRoLWljb24tdGV4dGZpZWxkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFjZWJvb2tcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtdHdpdHRlclwiXG4gICAgICAgICAgICBsYWJlbD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgbGFiZWw9XCJJbnN0YWdyYW1cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbUljb24vPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtc25hcGNoYXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJTbmFwIENoYXRcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNBY3RpdmVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5SRUZFUkVFIENPTlRBQ1QgSU5GTzwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAxXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUxZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDJcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMmxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMmVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMm1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgM1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlM2ZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA0XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU0Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDVcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTVmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNW1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5jb25zdCBGb3JtNiA9ICh7Y2xhc3NlcywgZGFzaCwgc3RhdGU6IHtmaXJzdE5hbWV9fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsQ29udGFpbmVyfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25ze1wiIFwifVxuICAgICAgICAgICAgICA8c3BhbiA+XG4gICAgICAgICAgICAgICAge2ZpcnN0TmFtZX0hISFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8geW91IHdpdGggeW91ciBsb2FuIGFwcGxpY2F0aW9uIElELlxuICAgICAgICAgICAgICBJZiB5b3Ugd2lzaCB0byBtYWtlIGVucXVpcmllcyBhYm91dCB5b3VyIGxvYW4sXG4gICAgICAgICAgICAgIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBZb3VyIGRhc2hib2FyZCBpcyByZWFkeSBmb3IgeW91IHRvIHJldmlldyB5b3VyIGxvYW4gaGlzdG9yeVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17ZGFzaH0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gRGFzaGJvYXJkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKExvYW5BcHBsaWNhdGlvbkZvcm0pO1xuXG57LyogPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cbiAgPFRleHRGaWVsZFxuICBkaXNhYmxlZD17IXJlZ2lvbiA/IHRydWUgOiBmYWxzZX1cbiAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtY2l0eVwiXG4gIHNlbGVjdFxuICBsYWJlbD1cIkN1cnJlbnQgQ2l0eVwiXG4gIG5hbWU9XCJjaXR5XCJcbiAgdmFsdWU9e2NpdHl9XG4gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gIElucHV0TGFiZWxQcm9wcz17e1xuICBzaHJpbms6IHRydWUsXG4gIH19XG4gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gID5cbiAge3JlZ2lvbiA/ICh0aGlzLmdldENpdHkocmVnaW9uKS5tYXAoKGNpdHkpID0+IChcbiAgPE1lbnVJdGVtIGtleT17Y2l0eS5jaXR5X2lkfSB2YWx1ZT17Y2l0eS5jaXR5X2lkfT5cbiAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyx3aWR0aDonMTAwJSd9fT5cbiAgPGRpdj57Y2l0eS5uYW1lX2VufTwvZGl2PjxkaXY+e2NpdHkubmFtZV9hcn08L2Rpdj5cbiAgPC9kaXY+XG4gIDwvTWVudUl0ZW0+XG4gICkpKSA6ICh0aGlzLmdldENpdHkoMSkubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkubmFtZV9lbn0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSl9XG4gIDwvVGV4dEZpZWxkPlxuPC9HcmlkPiAqL31cbiJdLCJzb3VyY2VSb290IjoiIn0=