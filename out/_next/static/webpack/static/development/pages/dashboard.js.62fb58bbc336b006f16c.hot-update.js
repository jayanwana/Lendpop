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
  var date = new Date();
  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 962,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
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
      lineNumber: 964,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
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
      lineNumber: 966,
      columnNumber: 13
    }
  }, ['1 Week', '2 Weeks', '3 Weeks', '1 Month'].map(function (item) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: item,
      value: item,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
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
      lineNumber: 986,
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
      lineNumber: 987,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 15
    }
  }, "Yes"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: false,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 15
    }
  }, "No"))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
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
      lineNumber: 1009,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
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
      lineNumber: 1028,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1029,
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
      lineNumber: 1030,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "1",
    value: "Bank",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 15
    }
  }, "Bank"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
    key: "0",
    value: "Card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 15
    }
  }, "Card"))), repaymentPlan === 'Card' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
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
      lineNumber: 1054,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1070,
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
      lineNumber: 1071,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 6,
    sm: 2,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 15
    }
  }, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_40__["DatePicker"], {
    views: ["year", "month"],
    label: "Year and Month",
    name: "expDate",
    helperText: "With min and max",
    minDate: date,
    maxDate: new Date(date.getFullYear() + 3, date.getMonth(), date.getDate()),
    value: expDate,
    onChange: handleChange,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 17
    }
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1103,
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
      lineNumber: 1104,
      columnNumber: 15
    }
  }, banks.map(function (bank, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: index,
      value: bank,
      __self: _this3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1120,
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
      lineNumber: 1126,
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
      lineNumber: 1127,
      columnNumber: 15
    }
  })))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
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
      lineNumber: 1148,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1149,
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
      lineNumber: 1150,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 17
    }
  }, "A passport photograph"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1153,
      columnNumber: 17
    }
  }, "Bank statement"), __jsx("li", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 17
    }
  }, "Letter of employment")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 4,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
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
      lineNumber: 1159,
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
      lineNumber: 1175,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      marginBottom: 24
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "caption",
    className: classes.formLabel,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 11
    }
  }, "TERMS & CONDITIONS"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
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
      lineNumber: 1189,
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
      lineNumber: 1198,
      columnNumber: 11
    }
  }, "1. Your agreement"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1205,
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
      lineNumber: 1223,
      columnNumber: 11
    }
  }, "2. Privacy"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 11
    }
  }, "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices. By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.")), __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_22__["default"], {
    row: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1251,
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
        lineNumber: 1254,
        columnNumber: 15
      }
    }),
    label: "I have read and understood the terms & conditions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1252,
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
      lineNumber: 1271,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: successPaper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.successText,
    variant: "body1",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273,
      columnNumber: 9
    }
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    className: classes.formCaption,
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1276,
      columnNumber: 9
    }
  }, "You're one step closer to completing your loan application, ", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1277,
      columnNumber: 71
    }
  }), "Instakash would like to get your personal social media details and 5 of your close contacts information.")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
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
      lineNumber: 1282,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1283,
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
          lineNumber: 1292,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_33___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1293,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1299,
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
          lineNumber: 1308,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_34___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1309,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1300,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1315,
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
          lineNumber: 1324,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_35___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1325,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1331,
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
          lineNumber: 1340,
          columnNumber: 17
        }
      }, __jsx(_material_ui_icons_NotificationsActive__WEBPACK_IMPORTED_MODULE_36___default.a, {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1341,
          columnNumber: 19
        }
      }))
    },
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1332,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formLabel,
    variant: "caption",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1348,
      columnNumber: 7
    }
  }, "REFEREE CONTACT INFO"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1349,
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
      lineNumber: 1351,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1352,
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
      lineNumber: 1353,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1367,
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
      lineNumber: 1368,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1381,
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
      lineNumber: 1382,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1396,
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
      lineNumber: 1397,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1412,
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
      lineNumber: 1414,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1415,
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
      lineNumber: 1416,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1430,
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
      lineNumber: 1431,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1444,
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
      lineNumber: 1445,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1459,
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
      lineNumber: 1460,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1475,
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
      lineNumber: 1477,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
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
      lineNumber: 1479,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1493,
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
      lineNumber: 1494,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1507,
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
      lineNumber: 1508,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1522,
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
      lineNumber: 1523,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1538,
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
      lineNumber: 1540,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1541,
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
      lineNumber: 1542,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1556,
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
      lineNumber: 1557,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1570,
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
      lineNumber: 1571,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1585,
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
      lineNumber: 1586,
      columnNumber: 11
    }
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.formSubLabel,
    variant: "caption",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1601,
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
      lineNumber: 1603,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1604,
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
      lineNumber: 1605,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1619,
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
      lineNumber: 1620,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1633,
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
      lineNumber: 1634,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1648,
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
      lineNumber: 1649,
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
      lineNumber: 1670,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.paper,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1671,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    container: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1672,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
    item: true,
    xs: 12,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1673,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1674,
      columnNumber: 13
    }
  }, "Congratulations", " ", __jsx("span", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1676,
      columnNumber: 15
    }
  }, firstName, "!!!")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h6",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1681,
      columnNumber: 13
    }
  }, "An email has been sent to you with your loan application ID. If you wish to make enquiries about your loan, please send an email to borrow@InstaKash.com."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body1",
    gutterBottom: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1686,
      columnNumber: 13
    }
  }, "Your dashboard is ready for you to review your loan history"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    fullWidth: true,
    variant: "outlined",
    onClick: dash,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1689,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJmaWxlcyIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsIlJvdXRlciIsInJlbG9hZCIsImlkIiwiY2l0aWVzIiwiZmlsdGVyIiwiY2l0eSIsInJlZ2lvbl9pZCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlTmV4dCIsImdvVG9EYXNoYm9hcmQiLCJreWNGb3JtIiwiZmlyc3RfbmFtZSIsInRlbnVyZSIsImluaXRpYWxfYW1vdW50IiwicGFuIiwiZXhwX2RhdGUiLCJBcGkiLCJreWNVcGRhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJhcGlEYXRhIiwibG9hbkFwcGxpY2F0aW9uIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImtleXMiLCJpIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsImRvY1VwbG9hZCIsImVycm9yIiwiY2xlYXIiLCJwYXJzZSIsImVkdWxpc3QiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVUZXJtcyIsImJpbmQiLCJjbGFzc2VzIiwic3RlcHMiLCJmaXhlZEhlaWdodFBhcGVyIiwiY2xzeCIsIkxhYmVsIiwibWFwIiwibGFiZWwiLCJzdWJtaXQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiaXRlbXMiLCJoYW5kbGVTYXZlIiwiaGFuZGxlQmFjayIsInN0ZXBBY3Rpb25zIiwiQ29tcG9uZW50IiwiRm9ybTAiLCJGb3JtMSIsInNocmluayIsIm1hcmdpbkxlZnQiLCJyZWdpb25zIiwibmFtZV9lbiIsIm5hbWVfYXIiLCJGb3JtMiIsImxldmVsIiwiRm9ybTMiLCJEYXRlIiwiaXRlbSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaW5kZXgiLCJGb3JtNCIsImJvcmRlciIsIm92ZXJmbG93WSIsImZvbnRXZWlnaHQiLCJGb3JtNSIsInN0YXJ0QWRvcm5tZW50IiwiRm9ybTYiLCJkYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw4REFBUSxDQUFDQywrREFBRCxDQUE3QjtLQUFNRixZOztBQUNOLElBQU1H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QUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsYUFBUyxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNrQixHQURsQixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR21DLFNBREgsUUFGRixDQURGLEVBUUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixnQkFBWSxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlLQVJGLEVBYUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixnQkFBWSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQWJGLEVBZ0JFLE1BQUMsaUVBQUQ7QUFBUSxhQUFTLE1BQWpCO0FBQWtCLFdBQU8sRUFBQyxVQUExQjtBQUFxQyxXQUFPLEVBQUV5SCxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRixDQURGLENBREYsQ0FERixDQURGO0FBNEJELENBN0JEOztNQUFNRCxLO0FBK0JTcEksOElBQVUsQ0FBQ3hELE1BQUQsQ0FBVixDQUFtQjZELG1CQUFuQixDQUFmO0FBRUE7QUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QlUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy42MmZiNThiYmMzMzZiMDA2ZjE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7VHJhbnNpdGlvbn0gZnJvbSAncmVhY3Qtc3ByaW5nL3JlbmRlcnByb3BzLmNqcyc7XG5pbXBvcnQge2FuaW1hdGVkLCBjb25maWd9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlcy93aXRoU3R5bGVzXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWxcIjtcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCI7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcbmltcG9ydCBTdGVwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwSWNvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtEcm9wem9uZUFyZWF9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ud2l0dGVyJztcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnN0YWdyYW0nO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnNBY3RpdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zQWN0aXZlJztcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCc7XG5pbXBvcnQgU3VwZXJ2aXNlZFVzZXJDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdXBlcnZpc2VkVXNlckNpcmNsZSc7XG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvcGlja2Vyc1wiO1xuaW1wb3J0IEJhY2sgZnJvbSBcIi4vY29tbW9uL0JhY2tcIjtcbmltcG9ydCBudW1lcmFsIGZyb20gXCJudW1lcmFsXCI7XG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvcXVlc3Rpb25zJztcbi8vIGltcG9ydCBQYXlzdGFjayBmcm9tICcuLi91dGlscy9heGlvcy5wYXlzdGFjayc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL3V0aWxzL2F4aW9zLnNlcnZpY2UnO1xuaW1wb3J0IHJlZ2lvbnMgZnJvbSAnLi9kYXRhL3NhdWRpX3JlZ2lvbnNfbGl0ZS5qc29uJztcbmltcG9ydCBpbmRpZ28gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2luZGlnbyc7XG5cbmNvbnN0IEFuaW1hdGVkR3JpZCA9IGFuaW1hdGVkKEdyaWQpXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCdsb2NhbC1zdG9yYWdlJylcbmNvbnN0IGJhY2tncm91bmRTaGFwZSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvaW1hZ2VzL3NoYXBlLnN2Z1wiKTtcblxubnVtZXJhbC5kZWZhdWx0Rm9ybWF0KFwiMCwwMDBcIik7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W1wiQTEwMFwiXSxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCIwIDQwMHB4XCIsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBwYWRkaW5nOiAnMjAgMCcsXG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG5cbiAgZ3JpZDoge1xuICAgIG1hcmdpbjogMFxuICB9LFxuICBzbWFsbENvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBiaWdDb250YWluZXI6IHtcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcbiAgc3RlcENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9LFxuICBzdGVwR3JpZDoge1xuICAgIHdpZHRoOiBcIjgwJVwiXG4gIH0sXG4gIGJhY2tCdXR0b246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9LFxuICBvdXRsaW5lZEJ1dHRvbToge1xuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIHN0ZXBwZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfVxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgIGZsZXhHcm93OiAwLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuXG4gIHBhcGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHN1Y2Nlc3NQYXBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gIH0sXG4gIHN1Y2Nlc3NUZXh0OiB7XG4gICAgbWFyZ2luOiAnNXB4IDAnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGZvcm1QYXBlcjoge1xuICAgIG1hcmdpbjogMCxcbiAgfSxcbiAgZm9ybUxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzEuMnJlbScsXG4gICAgY29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgfSxcbiAgZm9ybVN1YkxhYmVsOiB7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmb3JtQ2FwdGlvbjp7XG4gICAgcGFkZGluZzogOCxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmaXhlZEhlaWdodDoge1xuICAgIGhlaWdodDogMjUwLFxuICB9LFxuICB0b3BJbmZvOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiA0MlxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICB9LFxuICB9LFxuICBzZWxlY3RFbXB0eToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBib3JkZXJDb2x1bW46IHtcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbXCIxMDBcIl19YCxcbiAgICBwYWRkaW5nQm90dG9tOiAyNCxcbiAgICBtYXJnaW5Cb3R0b206IDI0XG4gIH0sXG4gIGJ1dHRvblByb2dyZXNzOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIC8vIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIHRvcDogJzUwJScsXG4gICAgLy8gbGVmdDogJzUwJScsXG4gICAgLy8gbWFyZ2luVG9wOiAtMTIsXG4gICAgLy8gbWFyZ2luTGVmdDogLTEyLFxuICB9LFxuICBmbGV4QmFyOiB7XG4gICAgbWFyZ2luVG9wOiAzMixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIixcbiAgICB3aWR0aDogJzQwJScsXG4gICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcIjp7XG4gICAgICBtYXJnaW5SaWdodDogJzE1cHgnXG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgQ3VzdG9tU3RlcEljb24gPSB3aXRoU3R5bGVzKHtcbiAgdGV4dDoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgfVxufSkoU3RlcEljb24pXG5cblxuY29uc3QgZ2V0U3RlcHMgPSAoKSA9PiB7XG4gIHJldHVybiBbXCJJTlNUUlVDVElPTlNcIiwgXCJQRVJTT05BTCBJTkZPXCIsIFwiREVNT0dSQVBISUNTXCIsIFwiRUxJR0lCSUxJVFlcIiwgXCJBR1JFRU1FTlRcIiwgXCJPVEhFUiBJTkZPXCIsIFwiQ09NUExFVEVcIl07XG59O1xuXG5jb25zdCBiYW5rcyA9IFsnVGhlIE5hdGlvbmFsIENvbW1lcmNpYWwgQmFuaycsICdUaGUgU2F1ZGkgQnJpdGlzaCBCYW5rJywgJ1NhdWRpIEludmVzdG1lbnQgQmFuaycsJ2FsaW5tYSBiYW5rJywnQmFucXVlIFNhdWRpIEZyYW5zaScsJ1JpeWFkIEJhbmsnLCAnU2FtYmEgRmluYW5jaWFsIEdyb3VwIChTYW1iYSknLCAnYWxhd3dhbCBiYW5rJywgJ0FsIFJhamhpIEJhbmsnLCAnQXJhYiBOYXRpb25hbCBCYW5rJywgJ0JhbmsgQWxCaWxhZCcsICdCYW5rIEFsSmF6aXJhJywgJ0d1bGYgSW50ZXJuYXRpb25hbCBCYW5rIFNhdWRpIEFyaWJpYSAoR0lCLVNBKSddXG5cbmNsYXNzIExvYW5BcHBsaWNhdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBhY3RpdmVTdGVwOiAwLFxuICAgIHRlcm1zQ2hlY2tlZDogZmFsc2UsXG4gICAgY29uZGl0aW9uc0NoZWNrZWQ6IGZhbHNlLFxuICAgIGxhYmVsV2lkdGg6IDAsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGZpcnN0TmFtZTogdGhpcy5wcm9wcy5maXJzdE5hbWUsXG4gICAgbGFzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5sYXN0X25hbWUsXG4gICAgTmF0aW9uYWxJZE5vOiB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgPyB0aGlzLnByb3BzLmRhdGEubmF0aW9uYWxfaWQgOiAnJyxcbiAgICBkb2I6IHRoaXMucHJvcHMuZGF0YS5kb2IgPyB0aGlzLnByb3BzLmRhdGEuZG9iIDogJycsXG4gICAgZW1haWw6IHRoaXMucHJvcHMuZW1haWwsXG4gICAgbW9iaWxlOiB0aGlzLnByb3BzLmRhdGEubW9iaWxlID8gdGhpcy5wcm9wcy5kYXRhLm1vYmlsZSA6ICcnLFxuICAgIGFkZHJlc3M6IHRoaXMucHJvcHMuZGF0YS5hZGRyZXNzID8gdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgOiAnJyxcbiAgICByZWdpb246ICcnLFxuICAgIGdlbmRlcjogdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA/IHRoaXMucHJvcHMuZGF0YS5nZW5kZXIgOiAnJyxcbiAgICBlZHVjYXRpb246ICcnLFxuICAgIGV0aG5pY2l0eTonJyxcbiAgICBlbXBsb3llZVJlZmVyZW5jZTogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9yZWZlcmVuY2UgOiAnJyxcbiAgICBlbXBsb3llZU51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA/IHRoaXMucHJvcHMuZGF0YS5lbXBsb3llZV9udW1iZXIgOiAnJyxcbiAgICBzYWxhcnk6IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgPyB0aGlzLnByb3BzLmRhdGEuc2FsYXJ5IDogJycsXG4gICAgcXVlc3Rpb25zOicnLFxuICAgIG1vYmlsZUNoZWNrOiBmYWxzZSxcbiAgICBhZGRyZXNzQ2hlY2s6IGZhbHNlLFxuICAgIGdyYWNlUGVyaW9kOiAnJyxcbiAgICBoYXNjcmVkaXRTY29yZTogZmFsc2UsXG4gICAgY3JlZGl0U2NvcmU6ICcnLFxuICAgIHJlcGF5bWVudFBsYW46ICcnLFxuICAgIGJhbmtOYW1lOiB0aGlzLnByb3BzLmRhdGEuYmFuayA/IHRoaXMucHJvcHMuZGF0YS5iYW5rIDogJycsXG4gICAgYWNjb3VudE51bWJlcjogdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmFjY291bnRfbnVtYmVyIDogJycsXG4gICAgYmFua3M6IGJhbmtzLFxuICAgIGNhcmROdW1iZXI6ICcnLFxuICAgIGN2djogJycsXG4gICAgZXhwRGF0ZTogJycsXG4gICAgZmlsZXM6IFtdXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaWYgKHRoaXMuc291cmNlKSB7XG4gICAgLy8gICAgICAgdGhpcy5zb3VyY2UuY2FuY2VsKCdDYW5jZWwgcHJldmlvdXMgcmVxdWVzdCcpO1xuICAgIC8vICAgfVxuICAgIC8vIHRoaXMuc291cmNlID0gUGF5c3RhY2suc291cmNlKClcbiAgICAvLyBQYXlzdGFjay5iYW5rcyh7IGNhbmNlbFRva2VuOiB0aGlzLnNvdXJjZS50b2tlbiB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoe2JhbmtzOiByZXNwb25zZS5kYXRhLmRhdGF9KVxuICAgIC8vIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnKSlcbiAgICBpZiAoZm9ybURhdGEpe3RoaXMuc2V0U3RhdGUoey4uLmZvcm1EYXRhfSl9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5zb3VyY2UuY2FuY2VsKCdwYXlzdGFjayByZXF1ZXN0IGNhbmNlbGVkJylcbiAgfVxuXG4gIGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgYWN0aXZlU3RlcDogc3RhdGUuYWN0aXZlU3RlcCArIDFcbiAgICB9KSk7XG4gICAgY29uc3QgZGF0YSA9IHsuLi50aGlzLnN0YXRlfVxuICAgIGRlbGV0ZSBkYXRhLmJhbmtzXG4gICAgZGVsZXRlIGRhdGEuZmlsZXNcbiAgICBkZWxldGUgZGF0YS5sb2FkaW5nXG4gICAgZGVsZXRlIGRhdGEuY2FyZE51bWJlclxuICAgIGRlbGV0ZSBkYXRhLmN2dlxuICAgIGRlbGV0ZSBkYXRlLmV4cERhdGVcbiAgICBpZihkYXRhLmFjdGl2ZVN0ZXAgPCA0KSB7XG4gICAgbG9jYWxTdG9yYWdlKCdmb3Jtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShkYXRhKSl9XG4gIH07XG5cbiAgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwIC0gMVxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IDBcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUZXJtcyA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LmNoZWNrZWQsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHN0ZXBBY3Rpb25zKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQpIHtcbiAgICAgIHJldHVybiBcIkFjY2VwdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAzKSB7XG4gICAgICByZXR1cm4gXCJTdWJtaXRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIFwiRG9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJOZXh0XCI7XG4gIH1cblxuICBnb1RvRGFzaGJvYXJkID0gZXZlbnQgPT4ge1xuICAgIFJvdXRlci5yZWxvYWQoKVxuICB9O1xuXG4gIGdldENpdHkgPSBpZCA9PiB7XG4gICAgcmV0dXJuIGNpdGllcy5maWx0ZXIoY2l0eSA9PiB7XG4gICAgICByZXR1cm4gY2l0eS5yZWdpb25faWQgPT09IGlkXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmUoZmlsZXMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWxlczogZmlsZXMsfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICB9XG5cbiAgc3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA0ICYmIHRoaXMuc3RhdGUuYWN0aXZlU3RlcCAhPT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTmV4dCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDYpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvVG9EYXNoYm9hcmQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0ICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcbiAgICAgIGNvbnN0IGt5Y0Zvcm0gPSB7XG4gICAgICAgIGZpcnN0X25hbWU6IHRoaXMuc3RhdGUuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0X25hbWU6IHRoaXMuc3RhdGUubGFzdE5hbWUsXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBuYXRpb25hbF9pZDogdGhpcy5zdGF0ZS5OYXRpb25hbElkTm8sXG4gICAgICAgIHNhbGFyeTogdGhpcy5zdGF0ZS5zYWxhcnksXG4gICAgICAgIGVtcGxveWVlX3JlZmVyZW5jZTogdGhpcy5zdGF0ZS5lbXBsb3llZVJlZmVyZW5jZSxcbiAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiB0aGlzLnN0YXRlLmVtcGxveWVlTnVtYmVyLFxuICAgICAgICBnZW5kZXI6IHRoaXMuc3RhdGUuZ2VuZGVyLFxuICAgICAgICBiYW5rOiB0aGlzLnN0YXRlLmJhbmtOYW1lLFxuICAgICAgICBtb2JpbGU6IHRoaXMuc3RhdGUubW9iaWxlLFxuICAgICAgICBkb2I6IHRoaXMuc3RhdGUuZG9iLFxuICAgICAgICB0ZW51cmU6IHRoaXMucHJvcHMuZGF0YS50ZW51cmUsXG4gICAgICAgIGluaXRpYWxfYW1vdW50OiB0aGlzLnByb3BzLmRhdGEuaW5pdGlhbF9hbW91bnQsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgYWNjb3VudF9udW1iZXI6IHRoaXMuc3RhdGUuYWNjb3VudE51bWJlcixcbiAgICAgICAgcGFuOiB0aGlzLnN0YXRlLmNhcmROdW1iZXIsXG4gICAgICAgIGN2djogdGhpcy5zdGF0ZS5jdnYsXG4gICAgICAgIGV4cF9kYXRlOiB0aGlzLnN0YXRlLmV4cERhdGVcbiAgICAgIH1cbiAgICAgIEFwaS5reWNVcGRhdGUoSlNPTi5zdHJpbmdpZnkoa3ljRm9ybSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcbiAgICAgICAgICBcImVtYWlsXCI6IGRhdGEuZW1haWwsXG4gICAgICAgICAgXCJhbW91bnRcIjogZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgICBcImxvYW5fY29zXCI6IFwiMVwiLFxuICAgICAgICAgIFwidGVudXJlXCI6IGRhdGEudGVudXJlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcGlEYXRhIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBBcGkubG9hbkFwcGxpY2F0aW9uKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVzY3JpcHRpb246IHJlc3BvbnNlLmRhdGEuZGVzY3JpcHRpb259KVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgIGNvbnN0IGtleXMgPSBbXCJuYXRpb25hbF9pZFwiLCAnc3RhdGVtZW50JywgJ2NvbnRyYWN0JywgJ3BheXNsaXAnXVxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRoaXMuc3RhdGUuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAga2V5c1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXSwgdGhpcy5zdGF0ZS5maWxlc1tpXS5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbG9hbl9pZCcsIHJlc3BvbnNlLmRhdGEuZGF0YS5pZClcbiAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGZpbGVzLi4uJyk7XG4gICAgICAgICAgQXBpLmRvY1VwbG9hZChmb3JtRGF0YSkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3I9Pntjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSl9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pXG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dCgpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgIH0pfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVkdWxpc3QgPSBbJ05vbmUnLCAnUHJpbWFyeScsICdTZWNvbmRhcnknLCAnRGlwbG9tYScsICdCYWNoZWxvcnMnLCAnTWFzdGVycycsICdEb2N0b3JhdGUnXTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZTtcbiAgICBjb25zdCBoYW5kbGVUZXJtcyA9IHRoaXMuaGFuZGxlVGVybXNcbiAgICBjb25zdCBnb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcylcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xuICAgIGNvbnN0IHsgYWN0aXZlU3RlcCwgZmlyc3ROYW1lLCBsb2FkaW5nLCB0ZXJtc0NoZWNrZWQsIGNvbmRpdGlvbnNDaGVja2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpeGVkSGVpZ2h0UGFwZXIgPSBjbHN4KGNsYXNzZXMucGFwZXIsIGNsYXNzZXMuZml4ZWRIZWlnaHQpO1xuICAgIGNvbnN0IHN1Y2Nlc3NQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5zdWNjZXNzUGFwZXIpO1xuICAgIGNvbnN0IExhYmVsID0gPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIj5QTEVBU0UgQ0xJQ0sgVE8gQUdSRUUgVE8gVEhFIFRFUk1TIEFORCBDT05ESVRJT05TPC9UeXBvZ3JhcGh5PlxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn1cbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICB7LyogPEJhY2sgLz4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3RlcENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5zdGVwcGVyIH19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZUxhYmVsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RlcHMubWFwKGxhYmVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwTGFiZWwgU3RlcEljb25Db21wb25lbnQ9e0N1c3RvbVN0ZXBJY29ufT57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvU3RlcHBlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfSBvblN1Ym1pdD17dGhpcy5zdWJtaXR9IHZhbGlkYXRlPVwidHJ1ZVwiIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm0wXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZEhlaWdodFBhcGVyPXtmaXhlZEhlaWdodFBhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgTGFiZWw9e0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVybXNDaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc30vPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAxfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAxKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gMn1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMikgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZHVsaXN0PXtlZHVsaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gM31cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gMykgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbmtzPXtiYW5rc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTYXZlPXt0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDR9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDQpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm00XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA1fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA1KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1BhcGVyPXtzdWNjZXNzUGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSA2fVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSA2KSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaD17Z29Ub0Rhc2hib2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXhCYXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwIDwgNSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gMCAmJiAhdGVybXNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA0ICYmICFjb25kaXRpb25zQ2hlY2tlZCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Qcm9ncmVzc30vPiA6IHRoaXMuc3RlcEFjdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9ybTAgPSAoe2ZpeGVkSGVpZ2h0UGFwZXIsIGNsYXNzZXMsIGZpcnN0TmFtZSwgdGVybXNDaGVja2VkLCBoYW5kbGVDaGFuZ2UsIGhhbmRsZVRlcm1zLCBMYWJlbH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtmaXhlZEhlaWdodFBhcGVyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9IHtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwic3VidGl0bGUxXCIgPkxvYW4gQXBwbGljYXRpb24gSW5zdHJ1Y3Rpb25zPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgSW5zdGFLYXNoIGFwcGxpY2F0aW9uIHBvcnRhbCB7Zmlyc3ROYW1lfSxcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICB3ZSB3aWxsIHdhbGsgeW91IHRocm91Z2ggdGhlIGVhc3kgcHJvY2VzcyBhcyB5b3UgY29udGludWUgeW91ciBhcHBsaWNhdGlvbi5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBQbGVhc2UgaGF2ZSB0aGUgZm9sbG93aW5nIGRvY3VtZW50cyBhdmFsYWJsZTpcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkJhc2ljIGluZm9ybWF0aW9uIGFib3V0IHlvdXJzZWxmPC9saT5cbiAgICAgICAgICAgIDxsaT5Gb3IgcGVyc29uYWwgbG9hbnMsIHNwZWNpZnkgZW1wbG95ZXIsIGVtcGxveWVyIHJlZnJlbmNlIG51bWJlciwgeW91ciBjdXJyZW50IHNhbGFyeSA8L2xpPlxuICAgICAgICAgICAgPGxpPkEgcGljdHVyZSBvZiB5b3UgZm9yIHlvdXIgbG9hbiBwcm9maWxlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgWW91ciBhcHBsaWNhdGlvbiBpcyBhdXRvbWF0aWNhbGx5IHNhdmVkIGFzIHlvdSBnbyB0aHJvdWdoIHRoZSBwcm9jZXNzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgRm9yIGlucXVpcmllcyBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+QXBwbGljYXRpb24gcmVxdWlyZW1lbnRzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgVGhlIGZvbGxvd2luZyBhcmUgc3BlY2lmaWMgcmVxdWlyZW1lbnRzIGZvciBhcHBseWluZyBmb3IgUE9QIGxlbmRpbmdcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlJlYWQgaW5zdHJ1Y3Rpb25zPC9saT5cbiAgICAgICAgICAgIDxsaT5Qcm92aWRlIGFsbCBvdGhlciBwZXJzb25hbCBpbmZvcm1hdGlvbjwvbGk+XG4gICAgICAgICAgICA8bGk+RW1wbG95bWVudCBoaXN0b3J5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QlZOIDwvbGk+XG4gICAgICAgICAgICA8bGk+QmFuayBkZXRhaWxzPC9saT5cbiAgICAgICAgICAgIDxsaT5Eb2N1bWVudHMgZm9yIGFjY291bnQgc3RhdGVtZW50czwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgQ2xpY2sgbmV4dCB0byBwcm9jZWVkIHRvIHRoZSBuZXh0IHN0YWdlIG9mIHlvdXIgSW5zdGFLYXNoIGFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgbmFtZT1cInRlcm1zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dGVybXNDaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsPXtMYWJlbH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuY29uc3QgRm9ybTEgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIHN0YXRlOiB7Zmlyc3ROYW1lLCBsYXN0TmFtZSxcbiAgZG9iLCBtb2JpbGUsIG1vYmlsZUNoZWNrLCBlbXBsb3llZVJlZmVyZW5jZSwgZW1wbG95ZWVOdW1iZXIsIHNhbGFyeSwgYWRkcmVzcyxcbiAgZW1haWwsIHJlZ2lvbiwgYWRkcmVzc0NoZWNrLCBOYXRpb25hbElkTm99XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5QRVJTT05BTCBJTkZPUk1BVElPTjwvVHlwb2dyYXBoeT5cblxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1sYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbmluLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5hdGlvbmFsLWlkLW51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIk5hdGlvbmFsSWROb1wiXG4gICAgICAgICAgICB2YWx1ZT17TmF0aW9uYWxJZE5vfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmF0aW9uYWwgSUQgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZG9iLWlucHV0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBvZiBCaXJ0aFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgZm9ybWF0PVwiZGQvbW0veXl5eVwiXG4gICAgICAgICAgICBuYW1lPVwiZG9iXCJcbiAgICAgICAgICAgIHZhbHVlPXtkb2J9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cIm1vYmlsZVwiXG4gICAgICAgICAgICB2YWx1ZT17bW9iaWxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCcsIHBhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMTBweCcsIG1hcmdpbkxlZnQ6MH19XG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vYmlsZUNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bW9iaWxlQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBvcHQgaW4gZm9yIHNtcyBub3RpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgIG9mIG9mZmVyaW5ncyBzbXMgY2hhcmdlcyBhcHBseVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVSZWZlcmVuY2VcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1lbXBsb3llZS1yZWZlcmVuY2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbXBsb3llciBBZGRyZXNzXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVSZWZlcmVuY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIEVtcGxveWVycyBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZU51bWJlclwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLW51bWJlclwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVlIE51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlTnVtYmVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezJ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJzYWxhcnlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zYWxhcnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJTYWxhcnlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3NhbGFyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1vbnRobHkgU2FsYXJ5IEFtb3VudFwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFkZHJlc3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJQaHlzaWNhbCBBZGRyZXNzIEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgaG9tZSBhZGRyZXNzLCBwbGVhc2Ugc3BlY2lmeSBzdHJlZXQgbmFtZSBvciB1c2UgbG9jYXRpb24gZmluZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVnaW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJDdXJyZW50IFJlZ2lvblwiXG4gICAgICAgICAgICBuYW1lPVwicmVnaW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtyZWdpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZ2lvblwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyZWdpb25zLm1hcCgocmVnaW9uKSA9PiAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3JlZ2lvbi5yZWdpb25faWR9IHZhbHVlPXtyZWdpb24ucmVnaW9uX2lkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICAgICAgICAgICAgICAgICAgPGRpdj57cmVnaW9uLm5hbWVfZW59PC9kaXY+PGRpdj57cmVnaW9uLm5hbWVfYXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e3BhZGRpbmc6IDB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9IHN0eWxlPXt7ZmxvYXQ6IFwibGVmdFwifX0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xNXB4JywgbWFyZ2luTGVmdDowLCBtYXJnaW5SaWdodDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0NoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YWRkcmVzc0NoZWNrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBzdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGluZGljYXRlIGlmIHlvdXIgYWRkcmVzcyBoYXMgY2hhbmdlZCBpbiB0aGUgcGFzdFxuICAgICAgICAgICAgICAgICAgMyB5ZWFycy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cblxuICApXG59XG5cbmNvbnN0IEZvcm0yID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGVkdWxpc3QsIHN0YXRlOiB7Z2VuZGVyLCBlZHVjYXRpb24sIGV0aG5pY2l0eX19KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkRFTU9HUkFQSElDUzwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdlbmRlclwiXG4gICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgIGxhYmVsPVwiR2VuZGVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJnZW5kZXJcIlxuICAgICAgICAgICAgdmFsdWU9e2dlbmRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgcGljayB5b3VyIGdlbmRlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J21hbGUnIHZhbHVlPSdtYWxlJz5cbiAgICAgICAgICAgICAgTWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9J2ZlbWFsZScgdmFsdWU9J2ZlbWFsZSc+XG4gICAgICAgICAgICAgIEZlbWFsZVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFZHVjYXRpb25cIlxuICAgICAgICAgICAgbmFtZT1cImVkdWNhdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17ZWR1Y2F0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtlZHVsaXN0Lm1hcCgobGV2ZWwpID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17bGV2ZWx9IHZhbHVlPXtsZXZlbH0+XG4gICAgICAgICAgICAgICAge2xldmVsfVxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJldGhuaWNpdHlcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1ldGhuaWNpdHlcIlxuICAgICAgICAgICAgbGFiZWw9XCJFdGhuaWNpdHlcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtldGhuaWNpdHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFdGhuaWNpdHlcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5jb25zdCBGb3JtMyA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBiYW5rcywgaGFuZGxlU2F2ZSxcbiAgc3RhdGU6IHtncmFjZVBlcmlvZCwgaGFzY3JlZGl0U2NvcmUsIGNyZWRpdFNjb3JlLCByZXBheW1lbnRQbGFuLCBiYW5rTmFtZSwgYWNjb3VudE51bWJlciwgY2FyZE51bWJlciwgY3Z2LCBleHBEYXRlfX0pID0+IHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPkVMSUdJQklMSVRZPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRWxpZ2liaWxpdHkgZm9yIGdyYWNlIHBlcmlvZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJncmFjZVBlcmlvZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtncmFjZVBlcmlvZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7WycxIFdlZWsnLCAnMiBXZWVrcycsICczIFdlZWtzJywgJzEgTW9udGgnXS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LWVkdWNhdGlvblwiXG4gICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICBsYWJlbD1cIkRvIHlvdSBoYXZlIGEgY3JlZGl0IHNjb3JlP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJoYXNjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtoYXNjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzEnIHZhbHVlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMCcgdmFsdWU9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc2NyZWRpdFNjb3JlPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgIG5hbWU9XCJjcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY3JlZGl0U2NvcmVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIklmIHllcywgcGxlYXNlIHByb3ZpZGUgeW91ciBjcmVkaXQgc2NvcmVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGl0U2NvcmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ3JlZGl0IFNjb3JlXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PSdjYXB0aW9uJz5cbiAgICAgICAgICBERUJJVCAmIFJFQ09OQ0lMSUFUSU9OIEFVVEhPUklaQVRJT05cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VsZWN0LXJlcGF5bWVudC1wbGFuXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiSG93IHdvdWxkIHlvdSBsaWtlIHRvIHJlcGF5IHlvdXIgbG9hbj9cIlxuICAgICAgICAgICAgICBuYW1lPVwicmVwYXltZW50UGxhblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtyZXBheW1lbnRQbGFufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9XCJCYW5rXCI+XG4gICAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT1cIkNhcmRcIj5cbiAgICAgICAgICAgICAgICBDYXJkXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgeyhyZXBheW1lbnRQbGFuID09PSAnQ2FyZCcpID9cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWNhcmROdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhcmROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXJkIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdnZcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jdnZcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDVlZcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdnZ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDVlZcIlxuICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Mn0+XG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIHZpZXdzPXtbXCJ5ZWFyXCIsIFwibW9udGhcIl19XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlllYXIgYW5kIE1vbnRoXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJleHBEYXRlXCJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJXaXRoIG1pbiBhbmQgbWF4XCJcbiAgICAgICAgICAgICAgICAgIG1pbkRhdGU9e2RhdGV9XG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXtuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCkgKyAzLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBEYXRlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtYmFuay1uYW1lXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBCYW5rIE5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYW5rTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JhbmtOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2JhbmtzLm1hcCgoYmFuaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17YmFua30+XG4gICAgICAgICAgICAgICAgICAgIHtiYW5rfVxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBY2NvdW50IE51bWJlclwiXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8Lz59XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD0nY2FwdGlvbic+XG4gICAgICAgICAgTElTVCBPRiBET0NVTUVOVFMgVE8gVVBMT0FEXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAnMjBweCAwJywgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjZWNlY2VjJywgcGFkZGluZzogJzhweCd9fT5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5BIHBhc3Nwb3J0IHBob3RvZ3JhcGg8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5CYW5rIHN0YXRlbWVudDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkxldHRlciBvZiBlbXBsb3ltZW50PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8RHJvcHpvbmVBcmVhXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYXZlfVxuICAgICAgICAgICAgICBmaWxlc0xpbWl0PXs0fVxuICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddfVxuICAgICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XG4gICAgICAgICAgICAgIG1heEZpbGVTaXplPXs1MDAwMDAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgey8qIDxRdWVzdGlvbnMgZW1haWw9e2VtYWlsfS8+ICovfVxuICAgICAgPC9QYXBlcj5cbiAgICApXG4gIH1cblxuY29uc3QgRm9ybTQgPSAoe2NsYXNzZXMsIGhhbmRsZVRlcm1zLCBzdGF0ZToge2NvbmRpdGlvbnNDaGVja2VkfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iaWdDb250YWluZXJ9PlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImNhcHRpb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBURVJNUyAmIENPTkRJVElPTlNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBQbGVhc2UgcmVhZCB0aHJvdWdoIGFuZCBhY2NlcHQgdGhlIHRlcm1zICZcbiAgICAgICAgICAgIGNvbmRpdGlvbnNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogMzMwLFxuICAgICAgICAgICAgcGFkZGluZzogMTYsXG4gICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcbiAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tXG4gICAgICAgICAgPlxuICAgICAgICAgICAgMS4gWW91ciBhZ3JlZW1lbnRcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgQnkgdXNpbmcgdGhpcyBTaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnksIGFuZCB0b1xuICAgICAgICAgICAgY29tcGx5IHdpdGgsIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLiBJZiB5b3UgZG9cbiAgICAgICAgICAgIG5vdCBhZ3JlZSB0byB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucywgcGxlYXNlIGRvXG4gICAgICAgICAgICBub3QgdXNlIHRoaXMgc2l0ZS4gUExFQVNFIE5PVEU6IFdlIHJlc2VydmUgdGhlXG4gICAgICAgICAgICByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gY2hhbmdlLCBtb2RpZnkgb3JcbiAgICAgICAgICAgIG90aGVyd2lzZSBhbHRlciB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhdCBhbnlcbiAgICAgICAgICAgIHRpbWUuIFVubGVzcyBvdGhlcndpc2UgaW5kaWNhdGVkLCBhbWVuZG1lbnRzIHdpbGxcbiAgICAgICAgICAgIGJlY29tZSBlZmZlY3RpdmUgaW1tZWRpYXRlbHkuIFBsZWFzZSByZXZpZXcgdGhlc2VcbiAgICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zIHBlcmlvZGljYWxseS4gWW91ciBjb250aW51ZWRcbiAgICAgICAgICAgIHVzZSBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgY2hhbmdlc1xuICAgICAgICAgICAgYW5kL29yIG1vZGlmaWNhdGlvbnMgd2lsbCBjb25zdGl0dXRlIHlvdXIgYWNjZXB0YW5jZVxuICAgICAgICAgICAgb2YgdGhlIHJldmlzZWQgVGVybXMgYW5kIENvbmRpdGlvbnMgYW5kIHRoZVxuICAgICAgICAgICAgcmVhc29uYWJsZW5lc3Mgb2YgdGhlc2Ugc3RhbmRhcmRzIGZvciBub3RpY2Ugb2ZcbiAgICAgICAgICAgIGNoYW5nZXMuIEZvciB5b3VyIGluZm9ybWF0aW9uLCB0aGlzIHBhZ2Ugd2FzIGxhc3RcbiAgICAgICAgICAgIHVwZGF0ZWQgYXMgb2YgdGhlIGRhdGUgYXQgdGhlIHRvcCBvZiB0aGVzZSB0ZXJtcyBhbmRcbiAgICAgICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAyLiBQcml2YWN5XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZXZpZXcgb3VyIFByaXZhY3kgUG9saWN5LCB3aGljaCBhbHNvIGdvdmVybnNcbiAgICAgICAgICAgIHlvdXIgdmlzaXQgdG8gdGhpcyBTaXRlLCB0byB1bmRlcnN0YW5kIG91clxuICAgICAgICAgICAgcHJhY3RpY2VzLiBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZFxuICAgICAgICAgICAgYnksIGFuZCB0byBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLFxuICAgICAgICAgICAgcGxlYXNlIGRvIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZVxuICAgICAgICAgICAgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeVxuICAgICAgICAgICAgb3Igb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25kaXRpb25zQ2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZGl0aW9uc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9XCJJIGhhdmUgcmVhZCBhbmQgdW5kZXJzdG9vZCB0aGUgdGVybXMgJiBjb25kaXRpb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybTUgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgc3VjY2Vzc1BhcGVyLCBzdGF0ZToge2Rlc2NyaXB0aW9ufX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzdWNjZXNzUGFwZXJ9PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3VjY2Vzc1RleHR9IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1DYXB0aW9ufSBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgWW91J3JlIG9uZSBzdGVwIGNsb3NlciB0byBjb21wbGV0aW5nIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiwgPGJyLz5cbiAgICAgICAgICBJbnN0YWthc2ggd291bGQgbGlrZSB0byBnZXQgeW91ciBwZXJzb25hbCBzb2NpYWwgbWVkaWEgZGV0YWlscyBhbmQgNSBvZiB5b3VyIGNsb3NlIGNvbnRhY3RzIGluZm9ybWF0aW9uLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L1BhcGVyPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5TT0NJQUwgTUVESUEgSEFORExFPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXG4gICAgICAgICAgICBsYWJlbD1cIkZhY2Vib29rXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXR3aXR0ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJUd2l0dGVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtaW5zdGFncmFtXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSW5zdGFncmFtXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1JY29uLz5cbiAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cbiAgICAgICAgICAgIGlkPVwic29jaWFsLXNuYXBjaGF0XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU25hcCBDaGF0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zQWN0aXZlSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+UkVGRVJFRSBDT05UQUNUIElORk88L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgMVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMW1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAyXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUybGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUybW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDNcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2VtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTNtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgNFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGxhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0ZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNG1vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA1XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU1bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvUGFwZXI+XG4gIClcbn1cblxuY29uc3QgRm9ybTYgPSAoe2NsYXNzZXMsIGRhc2gsIHN0YXRlOiB7Zmlyc3ROYW1lfX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zbWFsbENvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgeHM9ezEyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9uc3tcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gPlxuICAgICAgICAgICAgICAgIHtmaXJzdE5hbWV9ISEhXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBBbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdSB3aXRoIHlvdXIgbG9hbiBhcHBsaWNhdGlvbiBJRC5cbiAgICAgICAgICAgICAgSWYgeW91IHdpc2ggdG8gbWFrZSBlbnF1aXJpZXMgYWJvdXQgeW91ciBsb2FuLFxuICAgICAgICAgICAgICBwbGVhc2Ugc2VuZCBhbiBlbWFpbCB0byBib3Jyb3dASW5zdGFLYXNoLmNvbS5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgWW91ciBkYXNoYm9hcmQgaXMgcmVhZHkgZm9yIHlvdSB0byByZXZpZXcgeW91ciBsb2FuIGhpc3RvcnlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9e2Rhc2h9PlxuICAgICAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShMb2FuQXBwbGljYXRpb25Gb3JtKTtcblxuey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gIDxUZXh0RmllbGRcbiAgZGlzYWJsZWQ9eyFyZWdpb24gPyB0cnVlIDogZmFsc2V9XG4gIGlkPVwib3V0bGluZWQtc2VsZWN0LWNpdHlcIlxuICBzZWxlY3RcbiAgbGFiZWw9XCJDdXJyZW50IENpdHlcIlxuICBuYW1lPVwiY2l0eVwiXG4gIHZhbHVlPXtjaXR5fVxuICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgc2hyaW5rOiB0cnVlLFxuICB9fVxuICB2YXJpYW50PVwib3V0bGluZWRcIlxuICA+XG4gIHtyZWdpb24gPyAodGhpcy5nZXRDaXR5KHJlZ2lvbikubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkuY2l0eV9pZH0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSkgOiAodGhpcy5nZXRDaXR5KDEpLm1hcCgoY2l0eSkgPT4gKFxuICA8TWVudUl0ZW0ga2V5PXtjaXR5LmNpdHlfaWR9IHZhbHVlPXtjaXR5Lm5hbWVfZW59PlxuICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLHdpZHRoOicxMDAlJ319PlxuICA8ZGl2PntjaXR5Lm5hbWVfZW59PC9kaXY+PGRpdj57Y2l0eS5uYW1lX2FyfTwvZGl2PlxuICA8L2Rpdj5cbiAgPC9NZW51SXRlbT5cbiAgKSkpfVxuICA8L1RleHRGaWVsZD5cbjwvR3JpZD4gKi99XG4iXSwic291cmNlUm9vdCI6IiJ9