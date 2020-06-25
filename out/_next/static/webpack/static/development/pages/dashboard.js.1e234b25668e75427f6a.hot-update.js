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
      expDate: '',
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
      delete date.expDate;

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
          bank: _this.state.bankName,
          mobile: _this.state.mobile,
          dob: _this.state.dob,
          tenure: _this.props.data.tenure,
          initial_amount: _this.props.data.initial_amount,
          address: _this.state.address,
          account_number: _this.state.accountNumber,
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
          lineNumber: 393,
          columnNumber: 19
        }
      }, "PLEASE CLICK TO AGREE TO THE TERMS AND CONDITIONS");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: classes.root,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        container: true,
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
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
          lineNumber: 398,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
        item: true,
        xs: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: classes.stepContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: classes.bigContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
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
          lineNumber: 408,
          columnNumber: 21
        }
      }, steps.map(function (label) {
        return __jsx(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: label,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 27
          }
        }, __jsx(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
          StepIconComponent: CustomStepIcon,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416,
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
          lineNumber: 422,
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
          lineNumber: 424,
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
          lineNumber: 433,
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
              lineNumber: 441,
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
              lineNumber: 442,
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
          lineNumber: 450,
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
              lineNumber: 458,
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
              lineNumber: 459,
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
          lineNumber: 468,
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
              lineNumber: 476,
              columnNumber: 25
            }
          }, __jsx(Form3, {
            classes: classes,
            banks: banks,
            handleSave: _this2.handleSave.bind(_this2),
            handleChange: handleChange,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 477,
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
          lineNumber: 486,
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
              lineNumber: 494,
              columnNumber: 25
            }
          }, __jsx(Form4, {
            classes: classes,
            handleTerms: handleTerms,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 495,
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
          lineNumber: 502,
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
              lineNumber: 510,
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
              lineNumber: 511,
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
          lineNumber: 519,
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
              lineNumber: 527,
              columnNumber: 25
            }
          }, __jsx(Form6, {
            classes: classes,
            dash: goToDashboard,
            state: _objectSpread({}, _this2.state),
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 27
            }
          }));
        };
      }), __jsx("div", {
        className: classes.flexBar,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
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
          lineNumber: 537,
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
          lineNumber: 548,
          columnNumber: 23
        }
      }, loading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_30__["default"], {
        size: 24,
        className: classes.buttonProgress,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
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
      lineNumber: 576,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 11
    }
  }, "Loan Application Instructions"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 11
    }
  }, "Welcome to the InstaKash application portal ", firstName, ","), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 11
    }
  }, "we will walk you through the easy process as you continue your application."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 11
    }
  }, "Please have the following documents avalable:"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 13
    }
  }, "Basic information about yourself"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 13
    }
  }, "For personal loans, specify employer, employer refrence number, your current salary "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 13
    }
  }, "A picture of you for your loan profile")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 11
    }
  }, "Your application is automatically saved as you go through the process"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 11
    }
  }, "For inquiries please send an email to borrow@InstaKash.com"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    sm: 12,
    md: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: fixedHeightPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.title,
    variant: "subtitle1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 11
    }
  }, "Application requirements"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 11
    }
  }, "The following are specific requirements for applying for POP lending"), __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 13
    }
  }, "Read instructions"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 13
    }
  }, "Provide all other personal information"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 13
    }
  }, "Employment history "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 13
    }
  }, "BVN "), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 13
    }
  }, "Bank details"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 13
    }
  }, "Documents for account statements")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 11
    }
  }, "Click next to proceed to the next stage of your InstaKash application")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
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
        lineNumber: 625,
        columnNumber: 15
      }
    }),
    label: Label,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
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
      lineNumber: 645,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
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
      lineNumber: 648,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
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
      lineNumber: 650,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
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
      lineNumber: 666,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
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
      lineNumber: 682,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
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
      lineNumber: 699,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
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
      lineNumber: 716,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
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
      lineNumber: 733,
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
      lineNumber: 750,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
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
        lineNumber: 756,
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
        lineNumber: 763,
        columnNumber: 24
      }
    }, "By clicking the button you opt in for sms notification of offerings sms charges apply"),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
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
      lineNumber: 772,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
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
      lineNumber: 788,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
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
      lineNumber: 804,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 8,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
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
      lineNumber: 821,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 836,
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
      lineNumber: 837,
      columnNumber: 11
    }
  }, _data_saudi_regions_lite_json__WEBPACK_IMPORTED_MODULE_45__.map(function (region) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: region.region_id,
      value: region.region_id,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
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
        lineNumber: 853,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 19
      }
    }, region.name_en), __jsx("div", {
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
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
      lineNumber: 861,
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
      lineNumber: 862,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
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
        lineNumber: 867,
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
        lineNumber: 874,
        columnNumber: 24
      }
    }, "Please indicate if your address has changed in the past 3 years."),
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
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
      lineNumber: 890,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 891,
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
      lineNumber: 892,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
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
      lineNumber: 894,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "male",
    value: "male",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 13
    }
  }, "Male"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "female",
    value: "female",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 13
    }
  }, "Female"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
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
      lineNumber: 917,
      columnNumber: 11
    }
  }, edulist.map(function (level) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: level,
      value: level,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 932,
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
      lineNumber: 938,
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
      lineNumber: 939,
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
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
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
      lineNumber: 963,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
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
      lineNumber: 965,
      columnNumber: 13
    }
  }, ['1 Week', '2 Weeks', '3 Weeks', '1 Month'].map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: item,
      value: item,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979,
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
      lineNumber: 985,
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
      lineNumber: 986,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 15
    }
  }, "Yes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 15
    }
  }, "No"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1007,
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
      lineNumber: 1008,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
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
      lineNumber: 1027,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
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
      lineNumber: 1029,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: "Bank",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1042,
      columnNumber: 15
    }
  }, "Bank"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: "Card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 15
    }
  }, "Card"))), repaymentPlan === 'Card' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1052,
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
      lineNumber: 1053,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
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
      lineNumber: 1070,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 15
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__["DatePicker"], {
    views: ["year", "month"],
    label: "Year and Month",
    helperText: "With min and max",
    minDate: new Date("2018-03-01"),
    maxDate: new Date("2018-06-01"),
    value: selectedDate,
    onChange: handleDateChange,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
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
      lineNumber: 1102,
      columnNumber: 15
    }
  }, banks.map(function (bank, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index,
      value: bank,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1118,
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
      lineNumber: 1124,
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
      lineNumber: 1125,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
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
      lineNumber: 1146,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1147,
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
      lineNumber: 1148,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1149,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1150,
      columnNumber: 17
    }
  }, "A passport photograph"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 17
    }
  }, "Bank statement"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 17
    }
  }, "Letter of employment")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1156,
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
      lineNumber: 1157,
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
      lineNumber: 1173,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: 24
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "caption",
    className: classes.formLabel,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 11
    }
  }, "TERMS & CONDITIONS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1182,
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
      lineNumber: 1187,
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
      lineNumber: 1196,
      columnNumber: 11
    }
  }, "1. Your agreement"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203,
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
      lineNumber: 1221,
      columnNumber: 11
    }
  }, "2. Privacy"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228,
      columnNumber: 11
    }
  }, "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1249,
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
        lineNumber: 1252,
        columnNumber: 15
      }
    }),
    label: "I have read and understood the terms & conditions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250,
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
      lineNumber: 1269,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: successPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.successText,
    variant: "body1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1271,
      columnNumber: 9
    }
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274,
      columnNumber: 9
    }
  }, "You're one step closer to completing your loan application, ", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1275,
      columnNumber: 71
    }
  }), "Instakash would like to get your personal social media details and 5 of your close contacts information.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1279,
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
      lineNumber: 1280,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
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
          lineNumber: 1290,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1291,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1282,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1297,
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
          lineNumber: 1306,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1307,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1298,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1313,
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
          lineNumber: 1322,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1323,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1314,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1329,
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
          lineNumber: 1338,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1339,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1330,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1346,
      columnNumber: 7
    }
  }, "REFEREE CONTACT INFO"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1347,
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
      lineNumber: 1349,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350,
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
      lineNumber: 1351,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      lineNumber: 1379,
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
      lineNumber: 1380,
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
      lineNumber: 1395,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1410,
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
      lineNumber: 1412,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1413,
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
      lineNumber: 1414,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      lineNumber: 1442,
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
      lineNumber: 1443,
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
      lineNumber: 1458,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1473,
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
      lineNumber: 1475,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1476,
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
      lineNumber: 1477,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      lineNumber: 1505,
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
      lineNumber: 1506,
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
      lineNumber: 1521,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1536,
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
      lineNumber: 1538,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1539,
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
      lineNumber: 1540,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      lineNumber: 1568,
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
      lineNumber: 1569,
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
      lineNumber: 1584,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1599,
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
      lineNumber: 1601,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1602,
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
      lineNumber: 1603,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      lineNumber: 1631,
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
      lineNumber: 1632,
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
      lineNumber: 1647,
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
      lineNumber: 1668,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1669,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    container: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1670,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1671,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1672,
      columnNumber: 13
    }
  }, "Congratulations", " ", __jsx("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1674,
      columnNumber: 15
    }
  }, firstName, "!!!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1679,
      columnNumber: 13
    }
  }, "An email has been sent to you with your loan application ID. If you wish to make enquiries about your loan, please send an email to borrow@InstaKash.com."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1684,
      columnNumber: 13
    }
  }, "Your dashboard is ready for you to review your loan history"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    variant: "outlined",
    onClick: dash,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1687,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJmaWxlcyIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJBcGkiLCJreWNVcGRhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJhcGlEYXRhIiwibG9hbkFwcGxpY2F0aW9uIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImtleXMiLCJpIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImRvY1VwbG9hZCIsImVycm9yIiwiY2xlYXIiLCJwYXJzZSIsImVkdWxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVUZXJtcyIsImJpbmQiLCJjbGFzc2VzIiwic3RlcHMiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIkxhYmVsIiwibWFwIiwibGFiZWwiLCJzdWJtaXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiaXRlbXMiLCJoYW5kbGVTYXZlIiwiaGFuZGxlQmFjayIsInN0ZXBBY3Rpb25zIiwiQ29tcG9uZW50IiwiRm9ybTAiLCJGb3JtMSIsInNocmluayIsIm1hcmdpbkxlZnQiLCJyZWdpb25zIiwibmFtZV9lbiIsIm5hbWVfYXIiLCJGb3JtMiIsImxldmVsIiwiRm9ybTMiLCJpdGVtIiwiRGF0ZSIsInNlbGVjdGVkRGF0ZSIsImhhbmRsZURhdGVDaGFuZ2UiLCJpbmRleCIsIkZvcm00IiwiYm9yZGVyIiwib3ZlcmZsb3dZIiwiZm9udFdlaWdodCIsIkZvcm01Iiwic3RhcnRBZG9ybm1lbnQiLCJGb3JtNiIsImRhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDhEQUFRLENBQUNDLCtEQUFELENBQTdCO0tBQU1GLFk7O0FBQ04sSUFBTUcs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QywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCLEdBRGxCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbUMsU0FESCxRQUZGLENBREYsRUFRRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBUkYsRUFhRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGdCQUFZLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBYkYsRUFnQkUsTUFBQyxpRUFBRDtBQUFRLGFBQVMsTUFBakI7QUFBa0IsV0FBTyxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBRXdILElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBaEJGLENBREYsQ0FERixDQURGLENBREY7QUE0QkQsQ0E3QkQ7O01BQU1ELEs7QUErQlNuSSw4SUFBVSxDQUFDeEQsTUFBRCxDQUFWLENBQW1CNkQsbUJBQW5CLENBQWY7QUFFQTtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLjFlMjM0YjI1NjY4ZTc1NDI3ZjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tICdyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzJztcbmltcG9ydCB7YW5pbWF0ZWQsIGNvbmZpZ30gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IFN0ZXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBJY29uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0Ryb3B6b25lQXJlYX0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0FjdGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNBY3RpdmUnO1xuaW1wb3J0IEFjY291bnRCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94JztcbmltcG9ydCBTdXBlcnZpc2VkVXNlckNpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1cGVydmlzZWRVc2VyQ2lyY2xlJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XG5pbXBvcnQgQmFjayBmcm9tIFwiLi9jb21tb24vQmFja1wiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9xdWVzdGlvbnMnO1xuLy8gaW1wb3J0IFBheXN0YWNrIGZyb20gJy4uL3V0aWxzL2F4aW9zLnBheXN0YWNrJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQgcmVnaW9ucyBmcm9tICcuL2RhdGEvc2F1ZGlfcmVnaW9uc19saXRlLmpzb24nO1xuaW1wb3J0IGluZGlnbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvaW5kaWdvJztcblxuY29uc3QgQW5pbWF0ZWRHcmlkID0gYW5pbWF0ZWQoR3JpZClcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ2xvY2FsLXN0b3JhZ2UnKVxuY29uc3QgYmFja2dyb3VuZFNoYXBlID0gcmVxdWlyZShcIi4uL3B1YmxpYy9pbWFnZXMvc2hhcGUuc3ZnXCIpO1xuXG5udW1lcmFsLmRlZmF1bHRGb3JtYXQoXCIwLDAwMFwiKTtcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbXCJBMTAwXCJdLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjAgNDAwcHhcIixcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIHBhZGRpbmc6ICcyMCAwJyxcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcblxuICBncmlkOiB7XG4gICAgbWFyZ2luOiAwXG4gIH0sXG4gIHNtYWxsQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG4gIGJpZ0NvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBzdGVwQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIHN0ZXBHcmlkOiB7XG4gICAgd2lkdGg6IFwiODAlXCJcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIG91dGxpbmVkQnV0dG9tOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfSxcbiAgc3RlcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCI6e1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9XG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgc3VjY2Vzc1BhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgfSxcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBtYXJnaW46ICc1cHggMCcsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgZm9ybVBhcGVyOiB7XG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBmb3JtTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICBjb2xvcjp0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuICBmb3JtU3ViTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZvcm1DYXB0aW9uOntcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZpeGVkSGVpZ2h0OiB7XG4gICAgaGVpZ2h0OiAyNTAsXG4gIH0sXG4gIHRvcEluZm86IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDQyXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH0sXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIGJvcmRlckNvbHVtbjoge1xuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVtcIjEwMFwiXX1gLFxuICAgIHBhZGRpbmdCb3R0b206IDI0LFxuICAgIG1hcmdpbkJvdHRvbTogMjRcbiAgfSxcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gdG9wOiAnNTAlJyxcbiAgICAvLyBsZWZ0OiAnNTAlJyxcbiAgICAvLyBtYXJnaW5Ub3A6IC0xMixcbiAgICAvLyBtYXJnaW5MZWZ0OiAtMTIsXG4gIH0sXG4gIGZsZXhCYXI6IHtcbiAgICBtYXJnaW5Ub3A6IDMyLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCdcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBDdXN0b21TdGVwSWNvbiA9IHdpdGhTdHlsZXMoe1xuICB0ZXh0OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9XG59KShTdGVwSWNvbilcblxuXG5jb25zdCBnZXRTdGVwcyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcIklOU1RSVUNUSU9OU1wiLCBcIlBFUlNPTkFMIElORk9cIiwgXCJERU1PR1JBUEhJQ1NcIiwgXCJFTElHSUJJTElUWVwiLCBcIkFHUkVFTUVOVFwiLCBcIk9USEVSIElORk9cIiwgXCJDT01QTEVURVwiXTtcbn07XG5cbmNvbnN0IGJhbmtzID0gWydUaGUgTmF0aW9uYWwgQ29tbWVyY2lhbCBCYW5rJywgJ1RoZSBTYXVkaSBCcml0aXNoIEJhbmsnLCAnU2F1ZGkgSW52ZXN0bWVudCBCYW5rJywnYWxpbm1hIGJhbmsnLCdCYW5xdWUgU2F1ZGkgRnJhbnNpJywnUml5YWQgQmFuaycsICdTYW1iYSBGaW5hbmNpYWwgR3JvdXAgKFNhbWJhKScsICdhbGF3d2FsIGJhbmsnLCAnQWwgUmFqaGkgQmFuaycsICdBcmFiIE5hdGlvbmFsIEJhbmsnLCAnQmFuayBBbEJpbGFkJywgJ0JhbmsgQWxKYXppcmEnLCAnR3VsZiBJbnRlcm5hdGlvbmFsIEJhbmsgU2F1ZGkgQXJpYmlhIChHSUItU0EpJ11cblxuY2xhc3MgTG9hbkFwcGxpY2F0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGFjdGl2ZVN0ZXA6IDAsXG4gICAgdGVybXNDaGVja2VkOiBmYWxzZSxcbiAgICBjb25kaXRpb25zQ2hlY2tlZDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZmlyc3ROYW1lOiB0aGlzLnByb3BzLmZpcnN0TmFtZSxcbiAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3RfbmFtZSxcbiAgICBOYXRpb25hbElkTm86IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA/IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA6ICcnLFxuICAgIGRvYjogdGhpcy5wcm9wcy5kYXRhLmRvYiA/IHRoaXMucHJvcHMuZGF0YS5kb2IgOiAnJyxcbiAgICBlbWFpbDogdGhpcy5wcm9wcy5lbWFpbCxcbiAgICBtb2JpbGU6IHRoaXMucHJvcHMuZGF0YS5tb2JpbGUgPyB0aGlzLnByb3BzLmRhdGEubW9iaWxlIDogJycsXG4gICAgYWRkcmVzczogdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgPyB0aGlzLnByb3BzLmRhdGEuYWRkcmVzcyA6ICcnLFxuICAgIHJlZ2lvbjogJycsXG4gICAgZ2VuZGVyOiB0aGlzLnByb3BzLmRhdGEuZ2VuZGVyID8gdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA6ICcnLFxuICAgIGVkdWNhdGlvbjogJycsXG4gICAgZXRobmljaXR5OicnLFxuICAgIGVtcGxveWVlUmVmZXJlbmNlOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfcmVmZXJlbmNlID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA6ICcnLFxuICAgIGVtcGxveWVlTnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA6ICcnLFxuICAgIHNhbGFyeTogdGhpcy5wcm9wcy5kYXRhLnNhbGFyeSA/IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgOiAnJyxcbiAgICBxdWVzdGlvbnM6JycsXG4gICAgbW9iaWxlQ2hlY2s6IGZhbHNlLFxuICAgIGFkZHJlc3NDaGVjazogZmFsc2UsXG4gICAgZ3JhY2VQZXJpb2Q6ICcnLFxuICAgIGhhc2NyZWRpdFNjb3JlOiBmYWxzZSxcbiAgICBjcmVkaXRTY29yZTogJycsXG4gICAgcmVwYXltZW50UGxhbjogJycsXG4gICAgYmFua05hbWU6IHRoaXMucHJvcHMuZGF0YS5iYW5rID8gdGhpcy5wcm9wcy5kYXRhLmJhbmsgOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgPyB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgOiAnJyxcbiAgICBiYW5rczogYmFua3MsXG4gICAgY2FyZE51bWJlcjogJycsXG4gICAgY3Z2OiAnJyxcbiAgICBleHBEYXRlOiAnJyxcbiAgICBmaWxlczogW11cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAvLyAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoJ0NhbmNlbCBwcmV2aW91cyByZXF1ZXN0Jyk7XG4gICAgLy8gICB9XG4gICAgLy8gdGhpcy5zb3VyY2UgPSBQYXlzdGFjay5zb3VyY2UoKVxuICAgIC8vIFBheXN0YWNrLmJhbmtzKHsgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7YmFua3M6IHJlc3BvbnNlLmRhdGEuZGF0YX0pXG4gICAgLy8gfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScpKVxuICAgIGlmIChmb3JtRGF0YSl7dGhpcy5zZXRTdGF0ZSh7Li4uZm9ybURhdGF9KX07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHJldHVybiB0aGlzLnNvdXJjZS5jYW5jZWwoJ3BheXN0YWNrIHJlcXVlc3QgY2FuY2VsZWQnKVxuICB9XG5cbiAgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwICsgMVxuICAgIH0pKTtcbiAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGV9XG4gICAgZGVsZXRlIGRhdGEuYmFua3NcbiAgICBkZWxldGUgZGF0YS5maWxlc1xuICAgIGRlbGV0ZSBkYXRhLmxvYWRpbmdcbiAgICBkZWxldGUgZGF0YS5jYXJkTnVtYmVyXG4gICAgZGVsZXRlIGRhdGEuY3Z2XG4gICAgZGVsZXRlIGRhdGUuZXhwRGF0ZVxuICAgIGlmKGRhdGEuYWN0aXZlU3RlcCA8IDQpIHtcbiAgICBsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKX1cbiAgfTtcblxuICBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IHN0YXRlLmFjdGl2ZVN0ZXAgLSAxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlU3RlcDogMFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRlcm1zID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCwgbG9hZGluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgc3RlcEFjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCkge1xuICAgICAgcmV0dXJuIFwiQWNjZXB0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDMpIHtcbiAgICAgIHJldHVybiBcIlN1Ym1pdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA2KSB7XG4gICAgICByZXR1cm4gXCJEb25lXCI7XG4gICAgfVxuICAgIHJldHVybiBcIk5leHRcIjtcbiAgfVxuXG4gIGdvVG9EYXNoYm9hcmQgPSBldmVudCA9PiB7XG4gICAgUm91dGVyLnJlbG9hZCgpXG4gIH07XG5cbiAgZ2V0Q2l0eSA9IGlkID0+IHtcbiAgICByZXR1cm4gY2l0aWVzLmZpbHRlcihjaXR5ID0+IHtcbiAgICAgIHJldHVybiBjaXR5LnJlZ2lvbl9pZCA9PT0gaWRcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZShmaWxlcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzOiBmaWxlcyx9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIH1cblxuICBzdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDQgJiYgdGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVOZXh0KClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuZ29Ub0Rhc2hib2FyZCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxuICAgICAgY29uc3Qga3ljRm9ybSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIG5hdGlvbmFsX2lkOiB0aGlzLnN0YXRlLk5hdGlvbmFsSWRObyxcbiAgICAgICAgc2FsYXJ5OiB0aGlzLnN0YXRlLnNhbGFyeSxcbiAgICAgICAgZW1wbG95ZWVfcmVmZXJlbmNlOiB0aGlzLnN0YXRlLmVtcGxveWVlUmVmZXJlbmNlLFxuICAgICAgICBlbXBsb3llZV9udW1iZXI6IHRoaXMuc3RhdGUuZW1wbG95ZWVOdW1iZXIsXG4gICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgIGJhbms6IHRoaXMuc3RhdGUuYmFua05hbWUsXG4gICAgICAgIG1vYmlsZTogdGhpcy5zdGF0ZS5tb2JpbGUsXG4gICAgICAgIGRvYjogdGhpcy5zdGF0ZS5kb2IsXG4gICAgICAgIHRlbnVyZTogdGhpcy5wcm9wcy5kYXRhLnRlbnVyZSxcbiAgICAgICAgaW5pdGlhbF9hbW91bnQ6IHRoaXMucHJvcHMuZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxuICAgICAgICBhY2NvdW50X251bWJlcjogdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyLFxuICAgICAgICBwYW46IHRoaXMuc3RhdGUuY2FyZE51bWJlcixcbiAgICAgICAgY3Z2OiB0aGlzLnN0YXRlLmN2dixcbiAgICAgICAgZXhwX2RhdGU6IHRoaXMuc3RhdGUuZXhwRGF0ZVxuICAgICAgfVxuICAgICAgQXBpLmt5Y1VwZGF0ZShKU09OLnN0cmluZ2lmeShreWNGb3JtKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xuICAgICAgICAgIFwiZW1haWxcIjogZGF0YS5lbWFpbCxcbiAgICAgICAgICBcImFtb3VudFwiOiBkYXRhLmluaXRpYWxfYW1vdW50LFxuICAgICAgICAgIFwibG9hbl9jb3NcIjogXCIxXCIsXG4gICAgICAgICAgXCJ0ZW51cmVcIjogZGF0YS50ZW51cmUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaURhdGEgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIEFwaS5sb2FuQXBwbGljYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IFtcIm5hdGlvbmFsX2lkXCIsICdzdGF0ZW1lbnQnLCAnY29udHJhY3QnLCAncGF5c2xpcCddXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5zdGF0ZS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICBrZXlzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb2FuX2lkJywgcmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgZmlsZXMuLi4nKTtcbiAgICAgICAgICBBcGkuZG9jVXBsb2FkKGZvcm1EYXRhKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e2NvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxuICAgICAgfSl9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZWR1bGlzdCA9IFsnTm9uZScsICdQcmltYXJ5JywgJ1NlY29uZGFyeScsICdEaXBsb21hJywgJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ0RvY3RvcmF0ZSddO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlO1xuICAgIGNvbnN0IGhhbmRsZVRlcm1zID0gdGhpcy5oYW5kbGVUZXJtc1xuICAgIGNvbnN0IGdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XG4gICAgY29uc3QgeyBhY3RpdmVTdGVwLCBmaXJzdE5hbWUsIGxvYWRpbmcsIHRlcm1zQ2hlY2tlZCwgY29uZGl0aW9uc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZml4ZWRIZWlnaHRQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5maXhlZEhlaWdodCk7XG4gICAgY29uc3Qgc3VjY2Vzc1BhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLnN1Y2Nlc3NQYXBlcik7XG4gICAgY29uc3QgTGFiZWwgPSA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlBMRUFTRSBDTElDSyBUTyBBR1JFRSBUTyBUSEUgVEVSTVMgQU5EIENPTkRJVElPTlM8L1R5cG9ncmFwaHk+XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIHsvKiA8QmFjayAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnN0ZXBwZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q3VzdG9tU3RlcEljb259PntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gdmFsaWRhdGU9XCJ0cnVlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0UGFwZXI9e2ZpeGVkSGVpZ2h0UGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBMYWJlbD17TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtc0NoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDF9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDEpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAyfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAyKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkdWxpc3Q9e2VkdWxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAzKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFua3M9e2JhbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNhdmU9e3RoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNCkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDV9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDUpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm01XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzUGFwZXI9e3N1Y2Nlc3NQYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDZ9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDYpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm02XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoPXtnb1RvRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCA1ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAwICYmICF0ZXJtc0NoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgJiYgIWNvbmRpdGlvbnNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblByb2dyZXNzfS8+IDogdGhpcy5zdGVwQWN0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb3JtMCA9ICh7Zml4ZWRIZWlnaHRQYXBlciwgY2xhc3NlcywgZmlyc3ROYW1lLCB0ZXJtc0NoZWNrZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIExhYmVsfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+TG9hbiBBcHBsaWNhdGlvbiBJbnN0cnVjdGlvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBJbnN0YUthc2ggYXBwbGljYXRpb24gcG9ydGFsIHtmaXJzdE5hbWV9LFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIHdlIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgZWFzeSBwcm9jZXNzIGFzIHlvdSBjb250aW51ZSB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBoYXZlIHRoZSBmb2xsb3dpbmcgZG9jdW1lbnRzIGF2YWxhYmxlOlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgeW91cnNlbGY8L2xpPlxuICAgICAgICAgICAgPGxpPkZvciBwZXJzb25hbCBsb2Fucywgc3BlY2lmeSBlbXBsb3llciwgZW1wbG95ZXIgcmVmcmVuY2UgbnVtYmVyLCB5b3VyIGN1cnJlbnQgc2FsYXJ5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QSBwaWN0dXJlIG9mIHlvdSBmb3IgeW91ciBsb2FuIHByb2ZpbGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uIGlzIGF1dG9tYXRpY2FsbHkgc2F2ZWQgYXMgeW91IGdvIHRocm91Z2ggdGhlIHByb2Nlc3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBGb3IgaW5xdWlyaWVzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cInN1YnRpdGxlMVwiID5BcHBsaWNhdGlvbiByZXF1aXJlbWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIGFwcGx5aW5nIGZvciBQT1AgbGVuZGluZ1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+UmVhZCBpbnN0cnVjdGlvbnM8L2xpPlxuICAgICAgICAgICAgPGxpPlByb3ZpZGUgYWxsIG90aGVyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgIDxsaT5FbXBsb3ltZW50IGhpc3RvcnkgPC9saT5cbiAgICAgICAgICAgIDxsaT5CVk4gPC9saT5cbiAgICAgICAgICAgIDxsaT5CYW5rIGRldGFpbHM8L2xpPlxuICAgICAgICAgICAgPGxpPkRvY3VtZW50cyBmb3IgYWNjb3VudCBzdGF0ZW1lbnRzPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBDbGljayBuZXh0IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RhZ2Ugb2YgeW91ciBJbnN0YUthc2ggYXBwbGljYXRpb25cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwidGVybXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e0xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5jb25zdCBGb3JtMSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtmaXJzdE5hbWUsIGxhc3ROYW1lLFxuICBkb2IsIG1vYmlsZSwgbW9iaWxlQ2hlY2ssIGVtcGxveWVlUmVmZXJlbmNlLCBlbXBsb3llZU51bWJlciwgc2FsYXJ5LCBhZGRyZXNzLFxuICBlbWFpbCwgcmVnaW9uLCBhZGRyZXNzQ2hlY2ssIE5hdGlvbmFsSWROb31cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlBFUlNPTkFMIElORk9STUFUSU9OPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1uaW4taW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmF0aW9uYWwtaWQtbnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiTmF0aW9uYWxJZE5vXCJcbiAgICAgICAgICAgIHZhbHVlPXtOYXRpb25hbElkTm99XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1kb2ItaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIEJpcnRoXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJkZC9tbS95eXl5XCJcbiAgICAgICAgICAgIG5hbWU9XCJkb2JcIlxuICAgICAgICAgICAgdmFsdWU9e2RvYn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJywgcGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xMHB4JywgbWFyZ2luTGVmdDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVDaGVja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3R5bGU9e3tmb250U2l6ZTogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IG9wdCBpbiBmb3Igc21zIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgb2Ygb2ZmZXJpbmdzIHNtcyBjaGFyZ2VzIGFwcGx5XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZVJlZmVyZW5jZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLXJlZmVyZW5jZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVyIEFkZHJlc3NcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1wbG95ZXJzIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlTnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1wbG95ZWUtbnVtYmVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOdW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbXBsb3llZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cInNhbGFyeVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNhbGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIlNhbGFyeVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17c2FsYXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9udGhseSBTYWxhcnkgQW1vdW50XCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWRkcmVzc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlBoeXNpY2FsIEFkZHJlc3MgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBob21lIGFkZHJlc3MsIHBsZWFzZSBzcGVjaWZ5IHN0cmVldCBuYW1lIG9yIHVzZSBsb2NhdGlvbiBmaW5kZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZWdpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgUmVnaW9uXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWdpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUmVnaW9uXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlZ2lvbnMubWFwKChyZWdpb24pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cmVnaW9uLnJlZ2lvbl9pZH0gdmFsdWU9e3JlZ2lvbi5yZWdpb25faWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PntyZWdpb24ubmFtZV9lbn08L2Rpdj48ZGl2PntyZWdpb24ubmFtZV9hcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTE1cHgnLCBtYXJnaW5MZWZ0OjAsIG1hcmdpblJpZ2h0OjB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZGRyZXNzQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgaW5kaWNhdGUgaWYgeW91ciBhZGRyZXNzIGhhcyBjaGFuZ2VkIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgICAzIHllYXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuXG4gIClcbn1cblxuY29uc3QgRm9ybTIgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgZWR1bGlzdCwgc3RhdGU6IHtnZW5kZXIsIGVkdWNhdGlvbiwgZXRobmljaXR5fX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+REVNT0dSQVBISUNTPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ2VuZGVyXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwaWNrIHlvdXIgZ2VuZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nbWFsZScgdmFsdWU9J21hbGUnPlxuICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nZmVtYWxlJyB2YWx1ZT0nZmVtYWxlJz5cbiAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBuYW1lPVwiZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtlZHVjYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2VkdWxpc3QubWFwKChsZXZlbCkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsZXZlbH0gdmFsdWU9e2xldmVsfT5cbiAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cImV0aG5pY2l0eVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWV0aG5pY2l0eVwiXG4gICAgICAgICAgICBsYWJlbD1cIkV0aG5pY2l0eVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2V0aG5pY2l0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEV0aG5pY2l0eVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm0zID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGJhbmtzLCBoYW5kbGVTYXZlLFxuICBzdGF0ZToge2dyYWNlUGVyaW9kLCBoYXNjcmVkaXRTY29yZSwgY3JlZGl0U2NvcmUsIHJlcGF5bWVudFBsYW4sIGJhbmtOYW1lLCBhY2NvdW50TnVtYmVyLCBjYXJkTnVtYmVyLCBjdnYsIGV4cERhdGV9fSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5FTElHSUJJTElUWTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1ncmFjZVBlcmlvZFwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkVsaWdpYmlsaXR5IGZvciBncmFjZSBwZXJpb2RcIlxuICAgICAgICAgICAgICBuYW1lPVwiZ3JhY2VQZXJpb2RcIlxuICAgICAgICAgICAgICB2YWx1ZT17Z3JhY2VQZXJpb2R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge1snMSBXZWVrJywgJzIgV2Vla3MnLCAnMyBXZWVrcycsICcxIE1vbnRoJ10ubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJEbyB5b3UgaGF2ZSBhIGNyZWRpdCBzY29yZT9cIlxuICAgICAgICAgICAgICBuYW1lPVwiaGFzY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17aGFzY3JlZGl0U2NvcmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScxJyB2YWx1ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzAnIHZhbHVlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNjcmVkaXRTY29yZT8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICBuYW1lPVwiY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJZiB5ZXMsIHBsZWFzZSBwcm92aWRlIHlvdXIgY3JlZGl0IHNjb3JlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NyZWRpdFNjb3JlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENyZWRpdCBTY29yZVwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgREVCSVQgJiBSRUNPTkNJTElBVElPTiBBVVRIT1JJWkFUSU9OXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZXBheW1lbnQtcGxhblwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkhvdyB3b3VsZCB5b3UgbGlrZSB0byByZXBheSB5b3VyIGxvYW4/XCJcbiAgICAgICAgICAgICAgbmFtZT1cInJlcGF5bWVudFBsYW5cIlxuICAgICAgICAgICAgICB2YWx1ZT17cmVwYXltZW50UGxhbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzEnIHZhbHVlPVwiQmFua1wiPlxuICAgICAgICAgICAgICAgIEJhbmtcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMCcgdmFsdWU9XCJDYXJkXCI+XG4gICAgICAgICAgICAgICAgQ2FyZFxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsocmVwYXltZW50UGxhbiA9PT0gJ0NhcmQnKSA/XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcmROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FyZCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXJkTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FyZCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY3Z2XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY3Z2XCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ1ZWXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3Z2fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ1ZWXCJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezJ9PlxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICB2aWV3cz17W1wieWVhclwiLCBcIm1vbnRoXCJdfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZZWFyIGFuZCBNb250aFwiXG4gICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiV2l0aCBtaW4gYW5kIG1heFwiXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXtuZXcgRGF0ZShcIjIwMTgtMDMtMDFcIil9XG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZShcIjIwMTgtMDYtMDFcIil9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREYXRlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWJhbmstbmFtZVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQmFuayBOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYmFua05hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtiYW5rTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtiYW5rcy5tYXAoKGJhbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2Jhbmt9PlxuICAgICAgICAgICAgICAgICAgICB7YmFua31cbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROdW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudE51bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWNjb3VudCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC8+fVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9J2NhcHRpb24nPlxuICAgICAgICAgIExJU1QgT0YgRE9DVU1FTlRTIFRPIFVQTE9BRFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI2VjZWNlYycsIHBhZGRpbmc6ICc4cHgnfX0+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+QSBwYXNzcG9ydCBwaG90b2dyYXBoPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+QmFuayBzdGF0ZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5MZXR0ZXIgb2YgZW1wbG95bWVudDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPERyb3B6b25lQXJlYVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgICAgZmlsZXNMaW1pdD17NH1cbiAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdhcHBsaWNhdGlvbi9wZGYnXX1cbiAgICAgICAgICAgICAgc2hvd1ByZXZpZXdzPXt0cnVlfVxuICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17NTAwMDAwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiA8UXVlc3Rpb25zIGVtYWlsPXtlbWFpbH0vPiAqL31cbiAgICAgIDwvUGFwZXI+XG4gICAgKVxuICB9XG5cbmNvbnN0IEZvcm00ID0gKHtjbGFzc2VzLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtjb25kaXRpb25zQ2hlY2tlZH19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmlnQ29udGFpbmVyfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjYXB0aW9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVEVSTVMgJiBDT05ESVRJT05TXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ2FwdGlvbn0gZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgUGxlYXNlIHJlYWQgdGhyb3VnaCBhbmQgYWNjZXB0IHRoZSB0ZXJtcyAmXG4gICAgICAgICAgICBjb25kaXRpb25zXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjY2NjXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXG4gICAgICAgICAgICBvdmVyZmxvd1k6IFwic2Nyb2xsXCJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDEuIFlvdXIgYWdyZWVtZW50XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIEJ5IHVzaW5nIHRoaXMgU2l0ZSwgeW91IGFncmVlIHRvIGJlIGJvdW5kIGJ5LCBhbmQgdG9cbiAgICAgICAgICAgIGNvbXBseSB3aXRoLCB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucy4gSWYgeW91IGRvXG4gICAgICAgICAgICBub3QgYWdyZWUgdG8gdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMsIHBsZWFzZSBkb1xuICAgICAgICAgICAgbm90IHVzZSB0aGlzIHNpdGUuIFBMRUFTRSBOT1RFOiBXZSByZXNlcnZlIHRoZVxuICAgICAgICAgICAgcmlnaHQsIGF0IG91ciBzb2xlIGRpc2NyZXRpb24sIHRvIGNoYW5nZSwgbW9kaWZ5IG9yXG4gICAgICAgICAgICBvdGhlcndpc2UgYWx0ZXIgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMgYXQgYW55XG4gICAgICAgICAgICB0aW1lLiBVbmxlc3Mgb3RoZXJ3aXNlIGluZGljYXRlZCwgYW1lbmRtZW50cyB3aWxsXG4gICAgICAgICAgICBiZWNvbWUgZWZmZWN0aXZlIGltbWVkaWF0ZWx5LiBQbGVhc2UgcmV2aWV3IHRoZXNlXG4gICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9ucyBwZXJpb2RpY2FsbHkuIFlvdXIgY29udGludWVkXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIFNpdGUgZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIGNoYW5nZXNcbiAgICAgICAgICAgIGFuZC9vciBtb2RpZmljYXRpb25zIHdpbGwgY29uc3RpdHV0ZSB5b3VyIGFjY2VwdGFuY2VcbiAgICAgICAgICAgIG9mIHRoZSByZXZpc2VkIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCB0aGVcbiAgICAgICAgICAgIHJlYXNvbmFibGVuZXNzIG9mIHRoZXNlIHN0YW5kYXJkcyBmb3Igbm90aWNlIG9mXG4gICAgICAgICAgICBjaGFuZ2VzLiBGb3IgeW91ciBpbmZvcm1hdGlvbiwgdGhpcyBwYWdlIHdhcyBsYXN0XG4gICAgICAgICAgICB1cGRhdGVkIGFzIG9mIHRoZSBkYXRlIGF0IHRoZSB0b3Agb2YgdGhlc2UgdGVybXMgYW5kXG4gICAgICAgICAgICBjb25kaXRpb25zLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMi4gUHJpdmFjeVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmV2aWV3IG91ciBQcml2YWN5IFBvbGljeSwgd2hpY2ggYWxzbyBnb3Zlcm5zXG4gICAgICAgICAgICB5b3VyIHZpc2l0IHRvIHRoaXMgU2l0ZSwgdG8gdW5kZXJzdGFuZCBvdXJcbiAgICAgICAgICAgIHByYWN0aWNlcy4gQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmRcbiAgICAgICAgICAgIGJ5LCBhbmQgdG8gY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyxcbiAgICAgICAgICAgIHBsZWFzZSBkbyBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmVcbiAgICAgICAgICAgIHRoZSByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnlcbiAgICAgICAgICAgIG9yIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZGl0aW9uc0NoZWNrZWRcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmRpdGlvbnNDaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPVwiSSBoYXZlIHJlYWQgYW5kIHVuZGVyc3Rvb2QgdGhlIHRlcm1zICYgY29uZGl0aW9uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm01ID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIHN1Y2Nlc3NQYXBlciwgc3RhdGU6IHtkZXNjcmlwdGlvbn19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17c3VjY2Vzc1BhcGVyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Y2Nlc3NUZXh0fSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ2FwdGlvbn0gZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIFlvdSdyZSBvbmUgc3RlcCBjbG9zZXIgdG8gY29tcGxldGluZyB5b3VyIGxvYW4gYXBwbGljYXRpb24sIDxici8+XG4gICAgICAgICAgSW5zdGFrYXNoIHdvdWxkIGxpa2UgdG8gZ2V0IHlvdXIgcGVyc29uYWwgc29jaWFsIG1lZGlhIGRldGFpbHMgYW5kIDUgb2YgeW91ciBjbG9zZSBjb250YWN0cyBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9QYXBlcj5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+U09DSUFMIE1FRElBIEhBTkRMRTwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cImlucHV0LXdpdGgtaWNvbi10ZXh0ZmllbGRcIlxuICAgICAgICAgICAgbGFiZWw9XCJGYWNlYm9va1wiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC10d2l0dGVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiVHdpdHRlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8VHdpdHRlckljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLWluc3RhZ3JhbVwiXG4gICAgICAgICAgICBsYWJlbD1cIkluc3RhZ3JhbVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8SW5zdGFncmFtSWNvbi8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC1zbmFwY2hhdFwiXG4gICAgICAgICAgICBsYWJlbD1cIlNuYXAgQ2hhdFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0FjdGl2ZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlJFRkVSRUUgQ09OVEFDVCBJTkZPPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDFcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUyZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUyZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMm1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2ZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzbGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDRcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNGVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm02ID0gKHtjbGFzc2VzLCBkYXNoLCBzdGF0ZToge2ZpcnN0TmFtZX19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc21hbGxDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHhzPXsxMn0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnN7XCIgXCJ9XG4gICAgICAgICAgICAgIDxzcGFuID5cbiAgICAgICAgICAgICAgICB7Zmlyc3ROYW1lfSEhIVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgQW4gZW1haWwgaGFzIGJlZW4gc2VudCB0byB5b3Ugd2l0aCB5b3VyIGxvYW4gYXBwbGljYXRpb24gSUQuXG4gICAgICAgICAgICAgIElmIHlvdSB3aXNoIHRvIG1ha2UgZW5xdWlyaWVzIGFib3V0IHlvdXIgbG9hbixcbiAgICAgICAgICAgICAgcGxlYXNlIHNlbmQgYW4gZW1haWwgdG8gYm9ycm93QEluc3RhS2FzaC5jb20uXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIFlvdXIgZGFzaGJvYXJkIGlzIHJlYWR5IGZvciB5b3UgdG8gcmV2aWV3IHlvdXIgbG9hbiBoaXN0b3J5XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXtkYXNofT5cbiAgICAgICAgICAgICAgQmFjayB0byBEYXNoYm9hcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTG9hbkFwcGxpY2F0aW9uRm9ybSk7XG5cbnsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICA8VGV4dEZpZWxkXG4gIGRpc2FibGVkPXshcmVnaW9uID8gdHJ1ZSA6IGZhbHNlfVxuICBpZD1cIm91dGxpbmVkLXNlbGVjdC1jaXR5XCJcbiAgc2VsZWN0XG4gIGxhYmVsPVwiQ3VycmVudCBDaXR5XCJcbiAgbmFtZT1cImNpdHlcIlxuICB2YWx1ZT17Y2l0eX1cbiAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgSW5wdXRMYWJlbFByb3BzPXt7XG4gIHNocmluazogdHJ1ZSxcbiAgfX1cbiAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgPlxuICB7cmVnaW9uID8gKHRoaXMuZ2V0Q2l0eShyZWdpb24pLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5LmNpdHlfaWR9PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpIDogKHRoaXMuZ2V0Q2l0eSgxKS5tYXAoKGNpdHkpID0+IChcbiAgPE1lbnVJdGVtIGtleT17Y2l0eS5jaXR5X2lkfSB2YWx1ZT17Y2l0eS5uYW1lX2VufT5cbiAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyx3aWR0aDonMTAwJSd9fT5cbiAgPGRpdj57Y2l0eS5uYW1lX2VufTwvZGl2PjxkaXY+e2NpdHkubmFtZV9hcn08L2Rpdj5cbiAgPC9kaXY+XG4gIDwvTWVudUl0ZW0+XG4gICkpKX1cbiAgPC9UZXh0RmllbGQ+XG48L0dyaWQ+ICovfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==