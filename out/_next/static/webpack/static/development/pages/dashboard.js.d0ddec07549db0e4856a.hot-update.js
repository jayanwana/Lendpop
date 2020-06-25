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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYW5BcHBsaWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiQW5pbWF0ZWRHcmlkIiwiYW5pbWF0ZWQiLCJHcmlkIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImJhY2tncm91bmRTaGFwZSIsIm51bWVyYWwiLCJkZWZhdWx0Rm9ybWF0Iiwic3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwid2lkdGgiLCJncmlkIiwibWFyZ2luIiwic21hbGxDb250YWluZXIiLCJiaWdDb250YWluZXIiLCJzdGVwQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwic3RlcEdyaWQiLCJiYWNrQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwib3V0bGluZWRCdXR0b20iLCJ0ZXh0VHJhbnNmb3JtIiwic3RlcHBlciIsInRpdGxlIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIm1haW4iLCJwYXBlciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3NQYXBlciIsImp1c3RpZnlDb250ZW50Iiwic3VjY2Vzc1RleHQiLCJmb3JtUGFwZXIiLCJmb3JtTGFiZWwiLCJmb3JtU3ViTGFiZWwiLCJmb3JtQ2FwdGlvbiIsImZpeGVkSGVpZ2h0IiwiaGVpZ2h0IiwidG9wSW5mbyIsIm1hcmdpbkJvdHRvbSIsImZvcm1Db250cm9sIiwic2VsZWN0RW1wdHkiLCJib3JkZXJDb2x1bW4iLCJib3JkZXJCb3R0b20iLCJncmV5IiwicGFkZGluZ0JvdHRvbSIsImJ1dHRvblByb2dyZXNzIiwiZmxleEJhciIsImFsaWduU2VsZiIsIkN1c3RvbVN0ZXBJY29uIiwid2l0aFN0eWxlcyIsInRleHQiLCJTdGVwSWNvbiIsImdldFN0ZXBzIiwiYmFua3MiLCJMb2FuQXBwbGljYXRpb25Gb3JtIiwibG9hZGluZyIsImFjdGl2ZVN0ZXAiLCJ0ZXJtc0NoZWNrZWQiLCJjb25kaXRpb25zQ2hlY2tlZCIsImxhYmVsV2lkdGgiLCJkZXNjcmlwdGlvbiIsImZpcnN0TmFtZSIsInByb3BzIiwibGFzdE5hbWUiLCJkYXRhIiwibGFzdF9uYW1lIiwiTmF0aW9uYWxJZE5vIiwibmF0aW9uYWxfaWQiLCJkb2IiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJyZWdpb24iLCJnZW5kZXIiLCJlZHVjYXRpb24iLCJldGhuaWNpdHkiLCJlbXBsb3llZVJlZmVyZW5jZSIsImVtcGxveWVlX3JlZmVyZW5jZSIsImVtcGxveWVlTnVtYmVyIiwiZW1wbG95ZWVfbnVtYmVyIiwic2FsYXJ5IiwicXVlc3Rpb25zIiwibW9iaWxlQ2hlY2siLCJhZGRyZXNzQ2hlY2siLCJncmFjZVBlcmlvZCIsImhhc2NyZWRpdFNjb3JlIiwiY3JlZGl0U2NvcmUiLCJyZXBheW1lbnRQbGFuIiwiYmFua05hbWUiLCJiYW5rIiwiYWNjb3VudE51bWJlciIsImFjY291bnRfbnVtYmVyIiwiY2FyZE51bWJlciIsImN2diIsImV4cERhdGUiLCJmaWxlcyIsInNldFN0YXRlIiwic3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiUm91dGVyIiwicmVsb2FkIiwiaWQiLCJjaXRpZXMiLCJmaWx0ZXIiLCJjaXR5IiwicmVnaW9uX2lkIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVOZXh0IiwiZ29Ub0Rhc2hib2FyZCIsImt5Y0Zvcm0iLCJmaXJzdF9uYW1lIiwidGVudXJlIiwiaW5pdGlhbF9hbW91bnQiLCJwYW4iLCJleHBfZGF0ZSIsIkFwaSIsImt5Y1VwZGF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImFwaURhdGEiLCJsb2FuQXBwbGljYXRpb24iLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwia2V5cyIsImkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZG9jVXBsb2FkIiwiZXJyb3IiLCJjbGVhciIsInBhcnNlIiwiZWR1bGlzdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVRlcm1zIiwiYmluZCIsImNsYXNzZXMiLCJzdGVwcyIsImZpeGVkSGVpZ2h0UGFwZXIiLCJjbHN4IiwiTGFiZWwiLCJtYXAiLCJsYWJlbCIsInN1Ym1pdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJpdGVtcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVCYWNrIiwic3RlcEFjdGlvbnMiLCJDb21wb25lbnQiLCJGb3JtMCIsIkZvcm0xIiwic2hyaW5rIiwibWFyZ2luTGVmdCIsInJlZ2lvbnMiLCJuYW1lX2VuIiwibmFtZV9hciIsIkZvcm0yIiwibGV2ZWwiLCJGb3JtMyIsImRhdGUiLCJEYXRlIiwiaXRlbSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiaW5kZXgiLCJGb3JtNCIsImJvcmRlciIsIm92ZXJmbG93WSIsImZvbnRXZWlnaHQiLCJGb3JtNSIsInN0YXJ0QWRvcm5tZW50IiwiRm9ybTYiLCJkYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw4REFBUSxDQUFDQywrREFBRCxDQUE3QjtLQUFNRixZOztBQUNOLElBQU1HLFlBQVksR0FBR0MsbUJBQU8sQ0FBQyxvRUFBRCxDQUE1Qjs7QUFDQSxJQUFNQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsNkRBQUQsQ0FBL0I7O0FBRUFFLCtDQUFPLENBQUNDLGFBQVIsQ0FBc0IsT0FBdEI7O0FBR0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDdkJDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FETjtBQUVKQyxxQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQixNQUF0QixDQUZiO0FBR0pDLGNBQVEsRUFBRSxRQUhOO0FBSUpDLG9CQUFjLEVBQUUsT0FKWjtBQUtKQyx3QkFBa0IsRUFBRSxTQUxoQjtBQU1KQyxlQUFTLEVBQUUsRUFOUDtBQU9KQyxhQUFPLEVBQUUsTUFQTDtBQVFKQyxXQUFLLEVBQUU7QUFSSCxLQURpQjtBQVl2QkMsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKLEtBWmlCO0FBZXZCQyxrQkFBYyxFQUFFO0FBQ2RILFdBQUssRUFBRTtBQURPLEtBZk87QUFrQnZCSSxnQkFBWSxFQUFFO0FBQ1pKLFdBQUssRUFBRTtBQURLLEtBbEJTO0FBcUJ2QkssaUJBQWEsRUFBRTtBQUNiQyxhQUFPLEVBQUUsTUFESTtBQUViQyxtQkFBYSxFQUFFLFFBRkY7QUFHYkMsZ0JBQVUsRUFBRTtBQUhDLEtBckJRO0FBMEJ2QkMsWUFBUSxFQUFFO0FBQ1JULFdBQUssRUFBRTtBQURDLEtBMUJhO0FBNkJ2QlUsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUV0QixLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZDtBQURILEtBN0JXO0FBZ0N2QkMsa0JBQWMsRUFBRTtBQUNkQyxtQkFBYSxFQUFFLFdBREQ7QUFFZFosWUFBTSxFQUFFYixLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZDtBQUZNLEtBaENPO0FBb0N2QkcsV0FBTyxFQUFFO0FBQ1B2QixxQkFBZSxFQUFFLGFBRFY7QUFFUCw4Q0FBdUM7QUFDckNjLGVBQU8sRUFBRTtBQUQ0QjtBQUZoQyxLQXBDYztBQTJDdkJVLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUUsTUFETDtBQUVMMUIsY0FBUSxFQUFFLENBRkw7QUFHTDJCLGVBQVMsRUFBRSxNQUhOO0FBSUxDLFdBQUssRUFBRTlCLEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxPQUFkLENBQXNCMEI7QUFKeEIsS0EzQ2dCO0FBa0R2QkMsU0FBSyxFQUFFO0FBQ0x0QixhQUFPLEVBQUVWLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTE4sYUFBTyxFQUFFLE1BRko7QUFHTFgsY0FBUSxFQUFFLE1BSEw7QUFJTFksbUJBQWEsRUFBRSxRQUpWO0FBS0xlLGtCQUFZLEVBQUUsTUFMVDtBQU1MdEIsV0FBSyxFQUFFO0FBTkYsS0FsRGdCO0FBMER2QnVCLGdCQUFZLEVBQUU7QUFDWi9CLHFCQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxPQUFkLENBQXNCMEIsSUFEM0I7QUFFWkksb0JBQWMsRUFBRTtBQUZKLEtBMURTO0FBOER2QkMsZUFBVyxFQUFFO0FBQ1h2QixZQUFNLEVBQUUsT0FERztBQUVYaUIsV0FBSyxFQUFFO0FBRkksS0E5RFU7QUFrRXZCTyxhQUFTLEVBQUU7QUFDVHhCLFlBQU0sRUFBRTtBQURDLEtBbEVZO0FBcUV2QnlCLGFBQVMsRUFBRTtBQUNUNUIsYUFBTyxFQUFFLENBREE7QUFFVGtCLGNBQVEsRUFBRSxRQUZEO0FBR1RFLFdBQUssRUFBQzlCLEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxPQUFkLENBQXNCMEI7QUFIbkIsS0FyRVk7QUEwRXZCUSxnQkFBWSxFQUFFO0FBQ1o3QixhQUFPLEVBQUUsQ0FERztBQUVaa0IsY0FBUSxFQUFFO0FBRkUsS0ExRVM7QUE4RXZCWSxlQUFXLEVBQUM7QUFDVjlCLGFBQU8sRUFBRSxDQURDO0FBRVZrQixjQUFRLEVBQUU7QUFGQSxLQTlFVztBQWtGdkJhLGVBQVcsRUFBRTtBQUNYQyxZQUFNLEVBQUU7QUFERyxLQWxGVTtBQXFGdkJDLFdBQU8sRUFBRTtBQUNQMUIsYUFBTyxFQUFFLE1BREY7QUFFUGtCLG9CQUFjLEVBQUUsZUFGVDtBQUdQaEIsZ0JBQVUsRUFBRSxRQUhMO0FBSVB5QixrQkFBWSxFQUFFO0FBSlAsS0FyRmM7QUEyRnZCQyxlQUFXLEVBQUU7QUFDWGxDLFdBQUssRUFBRSxNQURJO0FBRVQsOEJBQXdCO0FBQ3RCQSxhQUFLLEVBQUU7QUFEZTtBQUZmLEtBM0ZVO0FBaUd2Qm1DLGVBQVcsRUFBRTtBQUNYckMsZUFBUyxFQUFFVCxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZDtBQURBLEtBakdVO0FBb0d2QndCLGdCQUFZLEVBQUU7QUFDWkMsa0JBQVksc0JBQWVoRCxLQUFLLENBQUNJLE9BQU4sQ0FBYzZDLElBQWQsQ0FBbUIsS0FBbkIsQ0FBZixDQURBO0FBRVpDLG1CQUFhLEVBQUUsRUFGSDtBQUdaTixrQkFBWSxFQUFFO0FBSEYsS0FwR1M7QUF5R3ZCTyxrQkFBYyxFQUFFO0FBQ2RyQixXQUFLLEVBQUU5QixLQUFLLENBQUNJLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQjBCLElBRGYsQ0FFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU5jLEtBekdPO0FBaUh2QnFCLFdBQU8sRUFBRTtBQUNQM0MsZUFBUyxFQUFFLEVBREo7QUFFUFEsYUFBTyxFQUFFLE1BRkY7QUFHUGtCLG9CQUFjLEVBQUUsUUFIVDtBQUlQa0IsZUFBUyxFQUFFLFVBSko7QUFLUDFDLFdBQUssRUFBRSxLQUxBO0FBTVAsOENBQXVDO0FBQ3JDVyxtQkFBVyxFQUFFO0FBRHdCO0FBTmhDO0FBakhjLEdBQUw7QUFBQSxDQUFwQjs7QUE2SEEsSUFBTWdDLGNBQWMsR0FBR0MsK0VBQVUsQ0FBQztBQUNoQ0MsTUFBSSxFQUFFO0FBQ0p2QyxXQUFPLEVBQUU7QUFETDtBQUQwQixDQUFELENBQVYsQ0FJcEJ3QyxtRUFKb0IsQ0FBdkI7O0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUFPLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyxjQUFsQyxFQUFrRCxhQUFsRCxFQUFpRSxXQUFqRSxFQUE4RSxZQUE5RSxFQUE0RixVQUE1RixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyw4QkFBRCxFQUFpQyx3QkFBakMsRUFBMkQsdUJBQTNELEVBQW1GLGFBQW5GLEVBQWlHLHFCQUFqRyxFQUF1SCxZQUF2SCxFQUFxSSwrQkFBckksRUFBc0ssY0FBdEssRUFBc0wsZUFBdEwsRUFBdU0sb0JBQXZNLEVBQTZOLGNBQTdOLEVBQTZPLGVBQTdPLEVBQThQLCtDQUE5UCxDQUFkOztJQUVNQyxtQjs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUUsS0FESDtBQUVOQyxnQkFBVSxFQUFFLENBRk47QUFHTkMsa0JBQVksRUFBRSxLQUhSO0FBSU5DLHVCQUFpQixFQUFFLEtBSmI7QUFLTkMsZ0JBQVUsRUFBRSxDQUxOO0FBTU5DLGlCQUFXLEVBQUUsRUFOUDtBQU9OQyxlQUFTLEVBQUUsTUFBS0MsS0FBTCxDQUFXRCxTQVBoQjtBQVFORSxjQUFRLEVBQUUsTUFBS0QsS0FBTCxDQUFXRSxJQUFYLENBQWdCQyxTQVJwQjtBQVNOQyxrQkFBWSxFQUFFLE1BQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkcsV0FBaEIsR0FBOEIsTUFBS0wsS0FBTCxDQUFXRSxJQUFYLENBQWdCRyxXQUE5QyxHQUE0RCxFQVRwRTtBQVVOQyxTQUFHLEVBQUUsTUFBS04sS0FBTCxDQUFXRSxJQUFYLENBQWdCSSxHQUFoQixHQUFzQixNQUFLTixLQUFMLENBQVdFLElBQVgsQ0FBZ0JJLEdBQXRDLEdBQTRDLEVBVjNDO0FBV05DLFdBQUssRUFBRSxNQUFLUCxLQUFMLENBQVdPLEtBWFo7QUFZTkMsWUFBTSxFQUFFLE1BQUtSLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sTUFBaEIsR0FBeUIsTUFBS1IsS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxNQUF6QyxHQUFrRCxFQVpwRDtBQWFOQyxhQUFPLEVBQUUsTUFBS1QsS0FBTCxDQUFXRSxJQUFYLENBQWdCTyxPQUFoQixHQUEwQixNQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JPLE9BQTFDLEdBQW9ELEVBYnZEO0FBY05DLFlBQU0sRUFBRSxFQWRGO0FBZU5DLFlBQU0sRUFBRSxNQUFLWCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JTLE1BQWhCLEdBQXlCLE1BQUtYLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQlMsTUFBekMsR0FBa0QsRUFmcEQ7QUFnQk5DLGVBQVMsRUFBRSxFQWhCTDtBQWlCTkMsZUFBUyxFQUFDLEVBakJKO0FBa0JOQyx1QkFBaUIsRUFBRSxNQUFLZCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JhLGtCQUFoQixHQUFxQyxNQUFLZixLQUFMLENBQVdFLElBQVgsQ0FBZ0JhLGtCQUFyRCxHQUEwRSxFQWxCdkY7QUFtQk5DLG9CQUFjLEVBQUUsTUFBS2hCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmUsZUFBaEIsR0FBa0MsTUFBS2pCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmUsZUFBbEQsR0FBb0UsRUFuQjlFO0FBb0JOQyxZQUFNLEVBQUUsTUFBS2xCLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQmdCLE1BQWhCLEdBQXlCLE1BQUtsQixLQUFMLENBQVdFLElBQVgsQ0FBZ0JnQixNQUF6QyxHQUFrRCxFQXBCcEQ7QUFxQk5DLGVBQVMsRUFBQyxFQXJCSjtBQXNCTkMsaUJBQVcsRUFBRSxLQXRCUDtBQXVCTkMsa0JBQVksRUFBRSxLQXZCUjtBQXdCTkMsaUJBQVcsRUFBRSxFQXhCUDtBQXlCTkMsb0JBQWMsRUFBRSxLQXpCVjtBQTBCTkMsaUJBQVcsRUFBRSxFQTFCUDtBQTJCTkMsbUJBQWEsRUFBRSxFQTNCVDtBQTRCTkMsY0FBUSxFQUFFLE1BQUsxQixLQUFMLENBQVdFLElBQVgsQ0FBZ0J5QixJQUFoQixHQUF1QixNQUFLM0IsS0FBTCxDQUFXRSxJQUFYLENBQWdCeUIsSUFBdkMsR0FBOEMsRUE1QmxEO0FBNkJOQyxtQkFBYSxFQUFFLE1BQUs1QixLQUFMLENBQVdFLElBQVgsQ0FBZ0IyQixjQUFoQixHQUFpQyxNQUFLN0IsS0FBTCxDQUFXRSxJQUFYLENBQWdCMkIsY0FBakQsR0FBa0UsRUE3QjNFO0FBOEJOdEMsV0FBSyxFQUFFQSxLQTlCRDtBQStCTnVDLGdCQUFVLEVBQUUsRUEvQk47QUFnQ05DLFNBQUcsRUFBRSxFQWhDQztBQWlDTkMsYUFBTyxFQUFFLEVBakNIO0FBa0NOQyxXQUFLLEVBQUU7QUFsQ0QsSzs7cU5BeURLLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFjLFVBQUFDLEtBQUs7QUFBQSxlQUFLO0FBQ3RCekMsb0JBQVUsRUFBRXlDLEtBQUssQ0FBQ3pDLFVBQU4sR0FBbUI7QUFEVCxTQUFMO0FBQUEsT0FBbkI7O0FBR0EsVUFBTVEsSUFBSSxxQkFBTyxNQUFLaUMsS0FBWixDQUFWOztBQUNBLGFBQU9qQyxJQUFJLENBQUNYLEtBQVo7QUFDQSxhQUFPVyxJQUFJLENBQUMrQixLQUFaO0FBQ0EsYUFBTy9CLElBQUksQ0FBQ1QsT0FBWjtBQUNBLGFBQU9TLElBQUksQ0FBQzRCLFVBQVo7QUFDQSxhQUFPNUIsSUFBSSxDQUFDNkIsR0FBWjtBQUNBLGFBQU83QixJQUFJLENBQUM4QixPQUFaOztBQUNBLFVBQUc5QixJQUFJLENBQUNSLFVBQUwsR0FBa0IsQ0FBckIsRUFBd0I7QUFDeEJwRSxvQkFBWSxDQUFDLFdBQUQsRUFBYzhHLElBQUksQ0FBQ0MsU0FBTCxDQUFlbkMsSUFBZixDQUFkLENBQVo7QUFBZ0Q7QUFDakQsSzs7cU5BRVksWUFBTTtBQUNqQixZQUFLZ0MsUUFBTCxDQUFjLFVBQUFDLEtBQUs7QUFBQSxlQUFLO0FBQ3RCekMsb0JBQVUsRUFBRXlDLEtBQUssQ0FBQ3pDLFVBQU4sR0FBbUI7QUFEVCxTQUFMO0FBQUEsT0FBbkI7QUFHRCxLOztzTkFFYSxZQUFNO0FBQ2xCLFlBQUt3QyxRQUFMLENBQWM7QUFDWnhDLGtCQUFVLEVBQUU7QUFEQSxPQUFkO0FBR0QsSzs7dU5BRWMsVUFBQTRDLEtBQUssRUFBSTtBQUN0QixZQUFLSixRQUFMLCtGQUFpQkksS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQTlCLEVBQXFDRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBbEQ7QUFDRCxLOztzTkFFYSxVQUFBSCxLQUFLLEVBQUk7QUFBQTs7QUFDckIsWUFBS0osUUFBTCxtSUFBaUJJLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUE5QixFQUFxQ0YsS0FBSyxDQUFDQyxNQUFOLENBQWFHLE9BQWxELHlIQUFvRSxLQUFwRTtBQUNELEs7O3dOQWVlLFVBQUFKLEtBQUssRUFBSTtBQUN2Qkssd0RBQU0sQ0FBQ0MsTUFBUDtBQUNELEs7O2tOQUVTLFVBQUFDLEVBQUUsRUFBSTtBQUNkLGFBQU9DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLFVBQUFDLElBQUksRUFBSTtBQUMzQixlQUFPQSxJQUFJLENBQUNDLFNBQUwsS0FBbUJKLEVBQTFCO0FBQ0QsT0FGTSxDQUFQO0FBR0QsSzs7aU5BVVEsVUFBQVAsS0FBSyxFQUFJO0FBQ2hCQSxXQUFLLENBQUNZLGNBQU47O0FBQ0EsVUFBSSxNQUFLZixLQUFMLENBQVd6QyxVQUFYLEtBQTBCLENBQTFCLElBQStCLE1BQUt5QyxLQUFMLENBQVd6QyxVQUFYLEtBQTBCLENBQTdELEVBQWdFO0FBQzlELGVBQU8sTUFBS3lELFVBQUwsRUFBUDtBQUNEOztBQUNELFVBQUksTUFBS2hCLEtBQUwsQ0FBV3pDLFVBQVgsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsZUFBTyxNQUFLMEQsYUFBTCxFQUFQO0FBQ0Q7O0FBQ0QsVUFBSSxNQUFLakIsS0FBTCxDQUFXekMsVUFBWCxLQUEwQixDQUE5QixFQUFrQztBQUNoQyxjQUFLd0MsUUFBTCxDQUFjO0FBQUN6QyxpQkFBTyxFQUFDO0FBQVQsU0FBZDs7QUFDQSxZQUFNNEQsT0FBTyxHQUFHO0FBQ2RDLG9CQUFVLEVBQUUsTUFBS25CLEtBQUwsQ0FBV3BDLFNBRFQ7QUFFZEksbUJBQVMsRUFBRSxNQUFLZ0MsS0FBTCxDQUFXbEMsUUFGUjtBQUdkTSxlQUFLLEVBQUUsTUFBSzRCLEtBQUwsQ0FBVzVCLEtBSEo7QUFJZEYscUJBQVcsRUFBRSxNQUFLOEIsS0FBTCxDQUFXL0IsWUFKVjtBQUtkYyxnQkFBTSxFQUFFLE1BQUtpQixLQUFMLENBQVdqQixNQUxMO0FBTWRILDRCQUFrQixFQUFFLE1BQUtvQixLQUFMLENBQVdyQixpQkFOakI7QUFPZEcseUJBQWUsRUFBRSxNQUFLa0IsS0FBTCxDQUFXbkIsY0FQZDtBQVFkTCxnQkFBTSxFQUFFLE1BQUt3QixLQUFMLENBQVd4QixNQVJMO0FBU2RnQixjQUFJLEVBQUUsTUFBS1EsS0FBTCxDQUFXVCxRQVRIO0FBVWRsQixnQkFBTSxFQUFFLE1BQUsyQixLQUFMLENBQVczQixNQVZMO0FBV2RGLGFBQUcsRUFBRSxNQUFLNkIsS0FBTCxDQUFXN0IsR0FYRjtBQVlkaUQsZ0JBQU0sRUFBRSxNQUFLdkQsS0FBTCxDQUFXRSxJQUFYLENBQWdCcUQsTUFaVjtBQWFkQyx3QkFBYyxFQUFFLE1BQUt4RCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JzRCxjQWJsQjtBQWNkL0MsaUJBQU8sRUFBRSxNQUFLMEIsS0FBTCxDQUFXMUIsT0FkTjtBQWVkb0Isd0JBQWMsRUFBRSxNQUFLTSxLQUFMLENBQVdQLGFBZmI7QUFnQmQ2QixhQUFHLEVBQUUsTUFBS3RCLEtBQUwsQ0FBV0wsVUFoQkY7QUFpQmRDLGFBQUcsRUFBRSxNQUFLSSxLQUFMLENBQVdKLEdBakJGO0FBa0JkMkIsa0JBQVEsRUFBRSxNQUFLdkIsS0FBTCxDQUFXSDtBQWxCUCxTQUFoQjtBQW9CQTJCLHFFQUFHLENBQUNDLFNBQUosQ0FBY3hCLElBQUksQ0FBQ0MsU0FBTCxDQUFlZ0IsT0FBZixDQUFkLEVBQXVDUSxJQUF2QyxDQUE0QyxVQUFDQyxRQUFELEVBQWM7QUFDeEQsaUJBQU9BLFFBQVEsQ0FBQzVELElBQVQsQ0FBY0EsSUFBckI7QUFDRCxTQUZELEVBRUcyRCxJQUZILENBRVEsVUFBQzNELElBQUQsRUFBVTtBQUNoQixjQUFNNkQsT0FBTyxHQUFHO0FBQ2QscUJBQVM3RCxJQUFJLENBQUNLLEtBREE7QUFFZCxzQkFBVUwsSUFBSSxDQUFDc0QsY0FGRDtBQUdkLHdCQUFZLEdBSEU7QUFJZCxzQkFBVXRELElBQUksQ0FBQ3FEO0FBSkQsV0FBaEI7QUFNQSxpQkFBT1EsT0FBUDtBQUFnQixTQVRsQixFQVVHRixJQVZILENBVVEsVUFBQzNELElBQUQsRUFBVTtBQUNoQixpQkFBT3lELDZEQUFHLENBQUNLLGVBQUosQ0FBb0I1QixJQUFJLENBQUNDLFNBQUwsQ0FBZW5DLElBQWYsQ0FBcEIsQ0FBUDtBQUNELFNBWkQsRUFZRzJELElBWkgsQ0FZUSxVQUFDQyxRQUFELEVBQWM7QUFDcEIsZ0JBQUs1QixRQUFMLENBQWM7QUFBQ3BDLHVCQUFXLEVBQUVnRSxRQUFRLENBQUM1RCxJQUFULENBQWNKO0FBQTVCLFdBQWQ7O0FBQ0EsY0FBSSxNQUFLcUMsS0FBTCxDQUFXRixLQUFYLENBQWlCZ0MsTUFBckIsRUFBNkI7QUFDM0IsZ0JBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0EsZ0JBQU1DLElBQUksR0FBRyxDQUFDLGFBQUQsRUFBZ0IsV0FBaEIsRUFBNkIsVUFBN0IsRUFBeUMsU0FBekMsQ0FBYjs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUcsTUFBS2xDLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQmdDLE1BQW5DLEVBQTJDSSxDQUFDLEVBQTVDLEVBQWdEO0FBQzlDSCxzQkFBUSxDQUFDSSxNQUFULENBQ0VGLElBQUksQ0FBQ0MsQ0FBRCxDQUROLEVBQ1csTUFBS2xDLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQm9DLENBQWpCLENBRFgsRUFDZ0MsTUFBS2xDLEtBQUwsQ0FBV0YsS0FBWCxDQUFpQm9DLENBQWpCLEVBQW9CN0IsSUFEcEQ7QUFHRDs7QUFDRDBCLG9CQUFRLENBQUNJLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkJSLFFBQVEsQ0FBQzVELElBQVQsQ0FBY0EsSUFBZCxDQUFtQjJDLEVBQTlDO0FBQ0EwQixtQkFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQWIseUVBQUcsQ0FBQ2MsU0FBSixDQUFjUCxRQUFkLEVBQXdCTCxJQUF4QixDQUE2QixVQUFDQyxRQUFELEVBQWE7QUFDeEMscUJBQU9BLFFBQVA7QUFDRCxhQUZELFdBRVMsVUFBQVksS0FBSyxFQUFFO0FBQUNILHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBSyxDQUFDWixRQUFsQjtBQUE0QixhQUY3QztBQUdELFdBYkQsTUFhTztBQUNMLG1CQUFPQSxRQUFQO0FBQ0Q7QUFDRixTQTlCRCxFQStCQ0QsSUEvQkQsQ0ErQk0sVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLGdCQUFLNUIsUUFBTCxDQUFjO0FBQUN6QyxtQkFBTyxFQUFDO0FBQVQsV0FBZDs7QUFDQSxnQkFBS2tGLEtBQUw7O0FBQ0EsZ0JBQUt4QixVQUFMO0FBQ0gsU0FuQ0QsV0FtQ1MsVUFBQXVCLEtBQUssRUFBSTtBQUNoQkgsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFLLENBQUNaLFFBQWxCO0FBQ0EsaUJBQU8sTUFBSzVCLFFBQUwsQ0FBYztBQUFDekMsbUJBQU8sRUFBQztBQUFULFdBQWQsQ0FBUDtBQUNELFNBdENEO0FBc0NHO0FBQ04sSzs7Ozs7Ozt3Q0EzSm1CO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTXlFLFFBQVEsR0FBRzlCLElBQUksQ0FBQ3dDLEtBQUwsQ0FBV3RKLFlBQVksQ0FBQyxXQUFELENBQXZCLENBQWpCOztBQUNBLFVBQUk0SSxRQUFKLEVBQWE7QUFBQyxhQUFLaEMsUUFBTCxtQkFBa0JnQyxRQUFsQjtBQUE2Qjs7QUFBQTtBQUM1Qzs7O3lDQUVvQixDQUVwQjs7OzJDQUVzQixDQUNyQjtBQUNEOzs7a0NBcUNhO0FBQ1osVUFBSSxLQUFLL0IsS0FBTCxDQUFXekMsVUFBWCxLQUEwQixDQUE5QixFQUFpQztBQUMvQixlQUFPLFFBQVA7QUFDRDs7QUFDRCxVQUFJLEtBQUt5QyxLQUFMLENBQVd6QyxVQUFYLEtBQTBCLENBQTlCLEVBQWlDO0FBQy9CLGVBQU8sUUFBUDtBQUNEOztBQUNELFVBQUksS0FBS3lDLEtBQUwsQ0FBV3pDLFVBQVgsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsZUFBTyxNQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxNQUFQO0FBQ0Q7OzsrQkFZVXVDLEssRUFBTztBQUNoQixXQUFLQyxRQUFMLENBQWM7QUFBQ0QsYUFBSyxFQUFFQTtBQUFSLE9BQWQ7QUFDRDs7OzRCQUVPO0FBQ04zRyxrQkFBWSxDQUFDcUosS0FBYjtBQUNEOzs7NkJBeUVRO0FBQUE7O0FBQ1AsVUFBTUUsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsV0FBcEIsRUFBaUMsU0FBakMsRUFBNEMsV0FBNUMsRUFBeUQsU0FBekQsRUFBb0UsV0FBcEUsQ0FBaEI7QUFDQSxVQUFNQyxZQUFZLEdBQUcsS0FBS0EsWUFBMUI7QUFDQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0EsV0FBekI7QUFDQSxVQUFNM0IsYUFBYSxHQUFHLEtBQUtBLGFBQUwsQ0FBbUI0QixJQUFuQixDQUF3QixJQUF4QixDQUF0QjtBQUpPLFVBS0NDLE9BTEQsR0FLYSxLQUFLakYsS0FMbEIsQ0FLQ2lGLE9BTEQ7QUFNUCxVQUFNQyxLQUFLLEdBQUc1RixRQUFRLEVBQXRCO0FBTk8sd0JBT3FFLEtBQUs2QyxLQVAxRTtBQUFBLFVBT0N6QyxVQVBELGVBT0NBLFVBUEQ7QUFBQSxVQU9hSyxTQVBiLGVBT2FBLFNBUGI7QUFBQSxVQU93Qk4sT0FQeEIsZUFPd0JBLE9BUHhCO0FBQUEsVUFPaUNFLFlBUGpDLGVBT2lDQSxZQVBqQztBQUFBLFVBTytDQyxpQkFQL0MsZUFPK0NBLGlCQVAvQztBQVFQLFVBQU11RixnQkFBZ0IsR0FBR0Msb0RBQUksQ0FBQ0gsT0FBTyxDQUFDckgsS0FBVCxFQUFnQnFILE9BQU8sQ0FBQzVHLFdBQXhCLENBQTdCO0FBQ0EsVUFBTVAsWUFBWSxHQUFHc0gsb0RBQUksQ0FBQ0gsT0FBTyxDQUFDckgsS0FBVCxFQUFnQnFILE9BQU8sQ0FBQ25ILFlBQXhCLENBQXpCOztBQUNBLFVBQU11SCxLQUFLLEdBQUcsTUFBQyxxRUFBRDtBQUFZLGVBQU8sRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQUFkOztBQUNBLGFBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRUosT0FBTyxDQUFDcEosSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsK0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGVBQU8sRUFBQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywrREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQ0Usa0JBQVUsRUFBQyxRQURiO0FBRUUsZUFBTyxFQUFDLFFBRlY7QUFHRSxpQkFBUyxNQUhYO0FBSUUsaUJBQVMsRUFBRW9KLE9BQU8sQ0FBQ3pJLElBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRSxNQUFDLCtEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFO0FBQUssaUJBQVMsRUFBRXlJLE9BQU8sQ0FBQ3JJLGFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUVxSSxPQUFPLENBQUN0SSxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrRUFBRDtBQUNFLGVBQU8sRUFBRTtBQUFFZCxjQUFJLEVBQUVvSixPQUFPLENBQUMzSDtBQUFoQixTQURYO0FBRUUsa0JBQVUsRUFBRW9DLFVBRmQ7QUFHRSx3QkFBZ0IsTUFIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtHd0YsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQUMsS0FBSyxFQUFJO0FBQ2xCLGVBQ0UsTUFBQywrREFBRDtBQUFNLGFBQUcsRUFBRUEsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0UsTUFBQyxvRUFBRDtBQUFXLDJCQUFpQixFQUFFckcsY0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUErQ3FHLEtBQS9DLENBREYsQ0FERjtBQUtELE9BTkEsQ0FMSCxDQURGLENBREYsRUFnQkU7QUFBTSxpQkFBUyxFQUFFTixPQUFPLENBQUN4RyxXQUF6QjtBQUFzQyxnQkFBUSxFQUFFLEtBQUsrRyxNQUFyRDtBQUE2RCxnQkFBUSxFQUFDLE1BQXRFO0FBQTZFLG9CQUFZLEVBQUMsS0FBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHOUYsVUFBVSxLQUFLLENBQWYsSUFDQyxNQUFDLEtBQUQ7QUFDRSx3QkFBZ0IsRUFBRXlGLGdCQURwQjtBQUVFLGVBQU8sRUFBRUYsT0FGWDtBQUdFLGlCQUFTLEVBQUVsRixTQUhiO0FBSUUsYUFBSyxFQUFFc0YsS0FKVDtBQUtFLG9CQUFZLEVBQUUxRixZQUxoQjtBQU1FLG9CQUFZLEVBQUVtRixZQU5oQjtBQU9FLG1CQUFXLEVBQUVDLFdBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBV0UsTUFBQyx3RUFBRDtBQUNFLGFBQUssRUFBRXJGLFVBQVUsS0FBSyxDQUR4QjtBQUVFLGVBQU8sRUFBRSxJQUZYO0FBR0UsWUFBSSxFQUFFO0FBQUUrRixpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRTtBQUF6QixTQUhSO0FBSUUsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFO0FBQXpCLFNBSlQ7QUFLRSxhQUFLLEVBQUU7QUFBRUQsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUUsd0JBQXpCO0FBQW1EN0ksaUJBQU8sRUFBRTtBQUE1RCxTQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPRyxVQUFBOEksS0FBSztBQUFBLGVBQUtqRyxVQUFVLEtBQUssQ0FBaEIsSUFBdUIsVUFBQU0sS0FBSztBQUFBLGlCQUNwQyxNQUFDLFlBQUQ7QUFBYyxpQkFBSyxFQUFFQSxLQUFyQjtBQUE0QixnQkFBSSxNQUFoQztBQUFpQyxjQUFFLEVBQUUsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsS0FBRDtBQUNFLG1CQUFPLEVBQUVpRixPQURYO0FBRUUsdUJBQVcsRUFBRUYsV0FGZjtBQUdFLHdCQUFZLEVBQUVELFlBSGhCO0FBSUUsaUJBQUssb0JBQU0sTUFBSSxDQUFDM0MsS0FBWCxDQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURvQztBQUFBLFNBQWhDO0FBQUEsT0FQUixDQVhGLEVBNEJFLE1BQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUV6QyxVQUFVLEtBQUssQ0FEeEI7QUFFRSxlQUFPLEVBQUUsSUFGWDtBQUdFLFlBQUksRUFBRTtBQUFFK0YsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FIUjtBQUlFLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRTtBQUF6QixTQUpUO0FBS0UsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFLHdCQUF6QjtBQUFtRDdJLGlCQUFPLEVBQUU7QUFBNUQsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0csVUFBQThJLEtBQUs7QUFBQSxlQUFLakcsVUFBVSxLQUFLLENBQWhCLElBQXVCLFVBQUFNLEtBQUs7QUFBQSxpQkFDcEMsTUFBQyxZQUFEO0FBQWMsaUJBQUssRUFBRUEsS0FBckI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBaUMsY0FBRSxFQUFFLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLEtBQUQ7QUFDRSxtQkFBTyxFQUFFaUYsT0FEWDtBQUVFLHVCQUFXLEVBQUVGLFdBRmY7QUFHRSx3QkFBWSxFQUFFRCxZQUhoQjtBQUlFLG1CQUFPLEVBQUVELE9BSlg7QUFLRSxpQkFBSyxvQkFBTSxNQUFJLENBQUMxQyxLQUFYLENBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRG9DO0FBQUEsU0FBaEM7QUFBQSxPQVBSLENBNUJGLEVBOENFLE1BQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUV6QyxVQUFVLEtBQUssQ0FEeEI7QUFFRSxlQUFPLEVBQUUsSUFGWDtBQUdFLFlBQUksRUFBRTtBQUFFK0YsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FIUjtBQUlFLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRTtBQUF6QixTQUpUO0FBS0UsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFLHdCQUF6QjtBQUFtRDdJLGlCQUFPLEVBQUU7QUFBNUQsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0csVUFBQThJLEtBQUs7QUFBQSxlQUFLakcsVUFBVSxLQUFLLENBQWhCLElBQXVCLFVBQUFNLEtBQUs7QUFBQSxpQkFDcEMsTUFBQyxZQUFEO0FBQWMsaUJBQUssRUFBRUEsS0FBckI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBaUMsY0FBRSxFQUFFLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLEtBQUQ7QUFDRSxtQkFBTyxFQUFFaUYsT0FEWDtBQUVFLGlCQUFLLEVBQUUxRixLQUZUO0FBR0Usc0JBQVUsRUFBRSxNQUFJLENBQUNxRyxVQUFMLENBQWdCWixJQUFoQixDQUFxQixNQUFyQixDQUhkO0FBSUUsd0JBQVksRUFBRUYsWUFKaEI7QUFLRSxpQkFBSyxvQkFBTSxNQUFJLENBQUMzQyxLQUFYLENBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRG9DO0FBQUEsU0FBaEM7QUFBQSxPQVBSLENBOUNGLEVBZ0VFLE1BQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUV6QyxVQUFVLEtBQUssQ0FEeEI7QUFFRSxlQUFPLEVBQUUsSUFGWDtBQUdFLFlBQUksRUFBRTtBQUFFK0YsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FIUjtBQUlFLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRTtBQUF6QixTQUpUO0FBS0UsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFLHdCQUF6QjtBQUFtRDdJLGlCQUFPLEVBQUU7QUFBNUQsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0csVUFBQThJLEtBQUs7QUFBQSxlQUFLakcsVUFBVSxLQUFLLENBQWhCLElBQXVCLFVBQUFNLEtBQUs7QUFBQSxpQkFDcEMsTUFBQyxZQUFEO0FBQWMsaUJBQUssRUFBRUEsS0FBckI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBaUMsY0FBRSxFQUFFLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLEtBQUQ7QUFDRSxtQkFBTyxFQUFFaUYsT0FEWDtBQUVFLHVCQUFXLEVBQUVGLFdBRmY7QUFHRSxpQkFBSyxvQkFBTSxNQUFJLENBQUM1QyxLQUFYLENBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBRG9DO0FBQUEsU0FBaEM7QUFBQSxPQVBSLENBaEVGLEVBZ0ZFLE1BQUMsd0VBQUQ7QUFDRSxhQUFLLEVBQUV6QyxVQUFVLEtBQUssQ0FEeEI7QUFFRSxlQUFPLEVBQUUsSUFGWDtBQUdFLFlBQUksRUFBRTtBQUFFK0YsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FIUjtBQUlFLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRTtBQUF6QixTQUpUO0FBS0UsYUFBSyxFQUFFO0FBQUVELGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFLHdCQUF6QjtBQUFtRDdJLGlCQUFPLEVBQUU7QUFBNUQsU0FMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0csVUFBQThJLEtBQUs7QUFBQSxlQUFLakcsVUFBVSxLQUFLLENBQWhCLElBQXVCLFVBQUFNLEtBQUs7QUFBQSxpQkFDcEMsTUFBQyxZQUFEO0FBQWMsaUJBQUssRUFBRUEsS0FBckI7QUFBNEIsZ0JBQUksTUFBaEM7QUFBaUMsY0FBRSxFQUFFLEVBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLEtBQUQ7QUFDRSxtQkFBTyxFQUFFaUYsT0FEWDtBQUVFLHdCQUFZLEVBQUVILFlBRmhCO0FBR0Usd0JBQVksRUFBRWhILFlBSGhCO0FBSUUsaUJBQUssb0JBQU0sTUFBSSxDQUFDcUUsS0FBWCxDQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURvQztBQUFBLFNBQWhDO0FBQUEsT0FQUixDQWhGRixFQWlHRSxNQUFDLHdFQUFEO0FBQ0UsYUFBSyxFQUFFekMsVUFBVSxLQUFLLENBRHhCO0FBRUUsZUFBTyxFQUFFLElBRlg7QUFHRSxZQUFJLEVBQUU7QUFBRStGLGlCQUFPLEVBQUUsQ0FBWDtBQUFjQyxtQkFBUyxFQUFFO0FBQXpCLFNBSFI7QUFJRSxhQUFLLEVBQUU7QUFBRUQsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLG1CQUFTLEVBQUU7QUFBekIsU0FKVDtBQUtFLGFBQUssRUFBRTtBQUFFRCxpQkFBTyxFQUFFLENBQVg7QUFBY0MsbUJBQVMsRUFBRSx3QkFBekI7QUFBbUQ3SSxpQkFBTyxFQUFFO0FBQTVELFNBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9HLFVBQUE4SSxLQUFLO0FBQUEsZUFBS2pHLFVBQVUsS0FBSyxDQUFoQixJQUF1QixVQUFBTSxLQUFLO0FBQUEsaUJBQ3BDLE1BQUMsWUFBRDtBQUFjLGlCQUFLLEVBQUVBLEtBQXJCO0FBQTRCLGdCQUFJLE1BQWhDO0FBQWlDLGNBQUUsRUFBRSxFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0UsTUFBQyxLQUFEO0FBQ0UsbUJBQU8sRUFBRWlGLE9BRFg7QUFFRSxnQkFBSSxFQUFFN0IsYUFGUjtBQUdFLGlCQUFLLG9CQUFNLE1BQUksQ0FBQ2pCLEtBQVgsQ0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FEb0M7QUFBQSxTQUFoQztBQUFBLE9BUFIsQ0FqR0YsRUFpSEU7QUFBSyxpQkFBUyxFQUFFOEMsT0FBTyxDQUFDakcsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHVSxVQUFVLEdBQUcsQ0FBYixJQUNDLE1BQUMsaUVBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsZUFBTyxFQUFDLFVBRlY7QUFHRSxnQkFBUSxFQUFFQSxVQUFVLEtBQUssQ0FIM0I7QUFJRSxlQUFPLEVBQUUsS0FBS21HLFVBSmhCO0FBS0UsaUJBQVMsRUFBRVosT0FBTyxDQUFDaEksVUFMckI7QUFNRSxZQUFJLEVBQUMsT0FOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLEVBYUUsTUFBQyxpRUFBRDtBQUNFLGlCQUFTLE1BRFg7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBQyxTQUhSO0FBSUUsWUFBSSxFQUFDLFFBSlA7QUFLRSxZQUFJLEVBQUMsT0FMUDtBQU1FLGdCQUFRLEVBQ0wsS0FBS2tGLEtBQUwsQ0FBV3pDLFVBQVgsS0FBMEIsQ0FBMUIsSUFBK0IsQ0FBQ0MsWUFBakMsSUFDQyxLQUFLd0MsS0FBTCxDQUFXekMsVUFBWCxLQUEwQixDQUExQixJQUErQixDQUFDRSxpQkFEakMsSUFFQUgsT0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBV0dBLE9BQU8sR0FBRyxNQUFDLDJFQUFEO0FBQWtCLFlBQUksRUFBRSxFQUF4QjtBQUE0QixpQkFBUyxFQUFFd0YsT0FBTyxDQUFDbEcsY0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFILEdBQXNFLEtBQUsrRyxXQUFMLEVBWGhGLENBYkYsQ0FqSEYsQ0FoQkYsQ0FGRixDQU5GLENBREYsQ0FERixDQURGLENBREY7QUFpTEQ7Ozs7RUEvWCtCQywrQzs7QUFrWWxDLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRGO0FBQUEsTUFBMUZiLGdCQUEwRixRQUExRkEsZ0JBQTBGO0FBQUEsTUFBeEVGLE9BQXdFLFFBQXhFQSxPQUF3RTtBQUFBLE1BQS9EbEYsU0FBK0QsUUFBL0RBLFNBQStEO0FBQUEsTUFBcERKLFlBQW9ELFFBQXBEQSxZQUFvRDtBQUFBLE1BQXRDbUYsWUFBc0MsUUFBdENBLFlBQXNDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhNLEtBQVcsUUFBWEEsS0FBVztBQUN4RyxTQUNFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFRixnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBWSxhQUFTLEVBQUdGLE9BQU8sQ0FBQzFILEtBQWhDO0FBQXVDLFdBQU8sRUFBQyxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLEVBRUUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQUMrQ3dDLFNBRC9DLE1BRkYsRUFLRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUZBTEYsRUFRRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEZBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUhGLENBWEYsRUFnQkUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQWhCRixFQW1CRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBbkJGLENBREYsQ0FERixFQTBCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFb0YsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFHRixPQUFPLENBQUMxSCxLQUFoQztBQUF1QyxXQUFPLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFLE1BQUMscUVBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFGRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FORixDQUxGLEVBY0UsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQWRGLENBREYsRUFvQkUsTUFBQyxvRUFBRDtBQUFXLE9BQUcsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUNFLFdBQU8sRUFDTCxNQUFDLG1FQUFEO0FBQ0UsVUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFPLEVBQUVvQyxZQUZYO0FBR0UsY0FBUSxFQUFFb0YsV0FIWjtBQUlFLFdBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVNFLFNBQUssRUFBRU0sS0FUVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FwQkYsQ0ExQkYsQ0FERjtBQStERCxDQWhFRDs7TUFBTVcsSzs7QUFrRU4sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFHUjtBQUFBLE1BSFVoQixPQUdWLFNBSFVBLE9BR1Y7QUFBQSxNQUhtQkgsWUFHbkIsU0FIbUJBLFlBR25CO0FBQUEsTUFIaUNDLFdBR2pDLFNBSGlDQSxXQUdqQztBQUFBLDBCQUg4QzVDLEtBRzlDO0FBQUEsTUFIc0RwQyxTQUd0RCxlQUhzREEsU0FHdEQ7QUFBQSxNQUhpRUUsUUFHakUsZUFIaUVBLFFBR2pFO0FBQUEsTUFGSkssR0FFSSxlQUZKQSxHQUVJO0FBQUEsTUFGQ0UsTUFFRCxlQUZDQSxNQUVEO0FBQUEsTUFGU1ksV0FFVCxlQUZTQSxXQUVUO0FBQUEsTUFGc0JOLGlCQUV0QixlQUZzQkEsaUJBRXRCO0FBQUEsTUFGeUNFLGNBRXpDLGVBRnlDQSxjQUV6QztBQUFBLE1BRnlERSxNQUV6RCxlQUZ5REEsTUFFekQ7QUFBQSxNQUZpRVQsT0FFakUsZUFGaUVBLE9BRWpFO0FBQUEsTUFESkYsS0FDSSxlQURKQSxLQUNJO0FBQUEsTUFER0csTUFDSCxlQURHQSxNQUNIO0FBQUEsTUFEV1csWUFDWCxlQURXQSxZQUNYO0FBQUEsTUFEeUJqQixZQUN6QixlQUR5QkEsWUFDekI7QUFDSixTQUNFLE1BQUMsZ0VBQUQ7QUFBTyxhQUFTLEVBQUU2RSxPQUFPLENBQUNySCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRXFILE9BQU8sQ0FBQy9HLFNBQS9CO0FBQTBDLFdBQU8sRUFBQyxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBR0UsTUFBQywrREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsU0FBSyxFQUFFO0FBQUN6QixZQUFNLEVBQUUsQ0FBVDtBQUFZRixXQUFLLEVBQUU7QUFBbkIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxZQUFRLE1BRlY7QUFHRSxRQUFJLEVBQUMsV0FIUDtBQUlFLE1BQUUsRUFBQyw2QkFKTDtBQUtFLFNBQUssRUFBQyxZQUxSO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxTQUFLLEVBQUV3RCxTQVBUO0FBUUUsWUFBUSxFQUFFK0UsWUFSWjtBQVNFLGVBQVcsRUFBQyxpQkFUZDtBQVVFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBaUJFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxZQUFRLE1BRlY7QUFHRSxNQUFFLEVBQUMsbUJBSEw7QUFJRSxTQUFLLEVBQUMsV0FKUjtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLFVBTlA7QUFPRSxTQUFLLEVBQUVqRyxRQVBUO0FBUUUsWUFBUSxFQUFFNkUsWUFSWjtBQVNFLGVBQVcsRUFBQyxnQkFUZDtBQVVFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpCRixFQWlDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsWUFBUSxNQUZWO0FBR0UsTUFBRSxFQUFDLG9CQUhMO0FBSUUsU0FBSyxFQUFDLG9CQUpSO0FBS0UsZ0JBQVksRUFBQyxvQkFMZjtBQU1FLFdBQU8sRUFBQyxVQU5WO0FBT0UsUUFBSSxFQUFDLGNBUFA7QUFRRSxTQUFLLEVBQUU5RixZQVJUO0FBU0UsWUFBUSxFQUFFMEUsWUFUWjtBQVVFLGVBQVcsRUFBQywwQkFWZDtBQVdFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBWG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWpDRixFQWtERSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsWUFBUSxNQUZWO0FBR0UsTUFBRSxFQUFDLG9CQUhMO0FBSUUsU0FBSyxFQUFDLGVBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxNQU5QO0FBT0UsVUFBTSxFQUFDLFlBUFQ7QUFRRSxRQUFJLEVBQUMsS0FSUDtBQVNFLFNBQUssRUFBRTVGLEdBVFQ7QUFVRSxZQUFRLEVBQUV3RSxZQVZaO0FBV0UsbUJBQWUsRUFBRTtBQUNib0IsWUFBTSxFQUFFO0FBREssS0FYbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbERGLEVBbUVFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxZQUFRLE1BRlY7QUFHRSxNQUFFLEVBQUMsZ0JBSEw7QUFJRSxTQUFLLEVBQUMsZUFKUjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxRQUFJLEVBQUMsT0FQUDtBQVFFLFNBQUssRUFBRTNGLEtBUlQ7QUFTRSxZQUFRLEVBQUV1RSxZQVRaO0FBVUUsZUFBVyxFQUFDLHFCQVZkO0FBV0UsbUJBQWUsRUFBRTtBQUNib0IsWUFBTSxFQUFFO0FBREssS0FYbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkVGLEVBb0ZFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxZQUFRLE1BRlY7QUFHRSxNQUFFLEVBQUMsaUJBSEw7QUFJRSxTQUFLLEVBQUMsZUFKUjtBQUtFLFFBQUksRUFBQyxRQUxQO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxRQUFJLEVBQUMsUUFQUDtBQVFFLFNBQUssRUFBRTFGLE1BUlQ7QUFTRSxZQUFRLEVBQUVzRSxZQVRaO0FBVUUsZUFBVyxFQUFDLHFCQVZkO0FBV0UsbUJBQWUsRUFBRTtBQUNib0IsWUFBTSxFQUFFO0FBREssS0FYbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBcEZGLEVBc0dFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFLLEVBQUU7QUFBQ3JKLGFBQU8sRUFBRSxNQUFWO0FBQWtCa0Isb0JBQWMsRUFBQyxVQUFqQztBQUE2Q3pCLGFBQU8sRUFBRTtBQUF0RCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFXLE9BQUcsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyRUFBRDtBQUNFLFNBQUssRUFBRTtBQUFDRCxlQUFTLEVBQUUsT0FBWjtBQUFxQjhKLGdCQUFVLEVBQUM7QUFBaEMsS0FEVDtBQUVFLFdBQU8sRUFDTCxNQUFDLG1FQUFEO0FBQ0UsVUFBSSxFQUFDLGFBRFA7QUFFRSxhQUFPLEVBQUUvRSxXQUZYO0FBR0UsY0FBUSxFQUFFMkQsV0FIWjtBQUlFLFdBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISjtBQVVFLFNBQUssRUFBRSxNQUFDLHFFQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLFdBQUssRUFBRTtBQUFDdkgsZ0JBQVEsRUFBRTtBQUFYLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBVlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQXRHRixFQTJIRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsWUFBUSxNQUZWO0FBR0UsUUFBSSxFQUFDLG1CQUhQO0FBSUUsTUFBRSxFQUFDLDZCQUpMO0FBS0UsU0FBSyxFQUFDLGtCQUxSO0FBTUUsV0FBTyxFQUFDLFVBTlY7QUFPRSxTQUFLLEVBQUVzRCxpQkFQVDtBQVFFLFlBQVEsRUFBRWdFLFlBUlo7QUFTRSxlQUFXLEVBQUMsOEJBVGQ7QUFVRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzSEYsRUEySUUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLFFBQUksRUFBQyxnQkFIUDtBQUlFLE1BQUUsRUFBQywwQkFKTDtBQUtFLFNBQUssRUFBQyxpQkFMUjtBQU1FLFdBQU8sRUFBQyxVQU5WO0FBT0UsU0FBSyxFQUFFbEYsY0FQVDtBQVFFLFlBQVEsRUFBRThELFlBUlo7QUFTRSxlQUFXLEVBQUMsdUJBVGQ7QUFVRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzSUYsRUEySkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsTUFBRSxFQUFDLGlCQUpMO0FBS0UsU0FBSyxFQUFDLFFBTFI7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLFFBQUksRUFBQyxRQVBQO0FBUUUsU0FBSyxFQUFFaEYsTUFSVDtBQVNFLFlBQVEsRUFBRTRELFlBVFo7QUFVRSxlQUFXLEVBQUMsNkJBVmQ7QUFXRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzSkYsRUE0S0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLE1BQUUsRUFBQyxrQkFITDtBQUlFLFNBQUssRUFBQyw4QkFKUjtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLFNBTlA7QUFPRSxTQUFLLEVBQUV6RixPQVBUO0FBUUUsWUFBUSxFQUFFcUUsWUFSWjtBQVNFLGVBQVcsRUFBQyw0RUFUZDtBQVVFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTVLRixFQTRMRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHdCQUZMO0FBR0UsVUFBTSxNQUhSO0FBSUUsU0FBSyxFQUFDLGdCQUpSO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFNRSxTQUFLLEVBQUV4RixNQU5UO0FBT0UsWUFBUSxFQUFFb0UsWUFQWjtBQVFFLFdBQU8sRUFBQyxVQVJWO0FBU0UsZUFBVyxFQUFDLGVBVGQ7QUFVRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0dFLDJEQUFPLENBQUNkLEdBQVIsQ0FBWSxVQUFDNUUsTUFBRDtBQUFBLFdBQ1gsTUFBQyxtRUFBRDtBQUFVLFNBQUcsRUFBRUEsTUFBTSxDQUFDdUMsU0FBdEI7QUFBaUMsV0FBSyxFQUFFdkMsTUFBTSxDQUFDdUMsU0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUNwRyxlQUFPLEVBQUMsTUFBVDtBQUFnQmtCLHNCQUFjLEVBQUMsZUFBL0I7QUFBK0N4QixhQUFLLEVBQUM7QUFBckQsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNbUUsTUFBTSxDQUFDMkYsT0FBYixDQURGLEVBQzZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTTNGLE1BQU0sQ0FBQzRGLE9BQWIsQ0FEN0IsQ0FERixDQURXO0FBQUEsR0FBWixDQWRILENBREYsQ0E1TEYsRUFxTkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBRTtBQUFDaEssYUFBTyxFQUFFO0FBQVYsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBMEIsU0FBSyxFQUFFO0FBQUMsZUFBTztBQUFSLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVcsT0FBRyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJFQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUNELGVBQVMsRUFBRSxPQUFaO0FBQXFCOEosZ0JBQVUsRUFBQyxDQUFoQztBQUFtQ2pKLGlCQUFXLEVBQUM7QUFBL0MsS0FEVDtBQUVFLFdBQU8sRUFDTCxNQUFDLG1FQUFEO0FBQ0UsVUFBSSxFQUFDLGNBRFA7QUFFRSxhQUFPLEVBQUVtRSxZQUZYO0FBR0UsY0FBUSxFQUFFMEQsV0FIWjtBQUlFLFdBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISjtBQVVFLFNBQUssRUFBRSxNQUFDLHFFQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLFdBQUssRUFBRTtBQUFDdkgsZ0JBQVEsRUFBRTtBQUFYLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBVlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQXJORixDQUhGLENBREY7QUFrUEQsQ0F0UEQ7O01BQU15SSxLOztBQXdQTixJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUE2RTtBQUFBLE1BQTNFdEIsT0FBMkUsU0FBM0VBLE9BQTJFO0FBQUEsTUFBbEVILFlBQWtFLFNBQWxFQSxZQUFrRTtBQUFBLE1BQXBERCxPQUFvRCxTQUFwREEsT0FBb0Q7QUFBQSwwQkFBM0MxQyxLQUEyQztBQUFBLE1BQW5DeEIsTUFBbUMsZUFBbkNBLE1BQW1DO0FBQUEsTUFBM0JDLFNBQTJCLGVBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixlQUFoQkEsU0FBZ0I7QUFDekYsU0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFb0UsT0FBTyxDQUFDckgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBWSxhQUFTLEVBQUVxSCxPQUFPLENBQUMvRyxTQUEvQjtBQUEwQyxXQUFPLEVBQUMsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDekIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsYUFBUyxNQUZYO0FBR0UsTUFBRSxFQUFDLHdCQUhMO0FBSUUsVUFBTSxNQUpSO0FBS0UsU0FBSyxFQUFDLFFBTFI7QUFNRSxRQUFJLEVBQUMsUUFOUDtBQU9FLFNBQUssRUFBRW9FLE1BUFQ7QUFRRSxZQUFRLEVBQUVtRSxZQVJaO0FBU0UsV0FBTyxFQUFDLFVBVFY7QUFVRSxlQUFXLEVBQUMseUJBVmQ7QUFXRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0UsTUFBQyxtRUFBRDtBQUFVLE9BQUcsRUFBQyxNQUFkO0FBQXFCLFNBQUssRUFBQyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsRUFpQkUsTUFBQyxtRUFBRDtBQUFVLE9BQUcsRUFBQyxRQUFkO0FBQXVCLFNBQUssRUFBQyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLENBREYsQ0FERixFQXdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsVUFBTSxNQUhSO0FBSUUsU0FBSyxFQUFDLFdBSlI7QUFLRSxlQUFXLEVBQUMsV0FMZDtBQU1FLFFBQUksRUFBQyxXQU5QO0FBT0UsU0FBSyxFQUFFdEYsU0FQVDtBQVFFLFlBQVEsRUFBRWtFLFlBUlo7QUFTRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVRuQjtBQVlFLFdBQU8sRUFBQyxVQVpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjR3JCLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNrQixLQUFEO0FBQUEsV0FDWCxNQUFDLG1FQUFEO0FBQVUsU0FBRyxFQUFFQSxLQUFmO0FBQXNCLFdBQUssRUFBRUEsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxLQURILENBRFc7QUFBQSxHQUFaLENBZEgsQ0FERixDQXhCRixFQThDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLFdBRlA7QUFHRSxNQUFFLEVBQUMsb0JBSEw7QUFJRSxTQUFLLEVBQUMsV0FKUjtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsU0FBSyxFQUFFM0YsU0FOVDtBQU9FLFlBQVEsRUFBRWlFLFlBUFo7QUFRRSxlQUFXLEVBQUMsaUJBUmQ7QUFTRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVRuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E5Q0YsQ0FGRixDQURGO0FBbUVELENBcEVEOztNQUFNSyxLOztBQXNFTixJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUM2RztBQUFBLE1BRDNHeEIsT0FDMkcsU0FEM0dBLE9BQzJHO0FBQUEsTUFEbEdILFlBQ2tHLFNBRGxHQSxZQUNrRztBQUFBLE1BRHBGdkYsS0FDb0YsU0FEcEZBLEtBQ29GO0FBQUEsTUFEN0VxRyxVQUM2RSxTQUQ3RUEsVUFDNkU7QUFBQSwwQkFBekh6RCxLQUF5SDtBQUFBLE1BQWpIYixXQUFpSCxlQUFqSEEsV0FBaUg7QUFBQSxNQUFwR0MsY0FBb0csZUFBcEdBLGNBQW9HO0FBQUEsTUFBcEZDLFdBQW9GLGVBQXBGQSxXQUFvRjtBQUFBLE1BQXZFQyxhQUF1RSxlQUF2RUEsYUFBdUU7QUFBQSxNQUF4REMsUUFBd0QsZUFBeERBLFFBQXdEO0FBQUEsTUFBOUNFLGFBQThDLGVBQTlDQSxhQUE4QztBQUFBLE1BQS9CRSxVQUErQixlQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsR0FBbUIsZUFBbkJBLEdBQW1CO0FBQUEsTUFBZEMsT0FBYyxlQUFkQSxPQUFjO0FBQ3ZILE1BQUkwRSxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsU0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFMUIsT0FBTyxDQUFDckgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBWSxhQUFTLEVBQUVxSCxPQUFPLENBQUMvRyxTQUEvQjtBQUEwQyxXQUFPLEVBQUMsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDekIsWUFBTSxFQUFFLFFBQVQ7QUFBbUJGLFdBQUssRUFBRTtBQUExQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLE1BQUUsRUFBQyw2QkFITDtBQUlFLFVBQU0sTUFKUjtBQUtFLFNBQUssRUFBQyw4QkFMUjtBQU1FLFFBQUksRUFBQyxhQU5QO0FBT0UsU0FBSyxFQUFFK0UsV0FQVDtBQVFFLFlBQVEsRUFBRXdELFlBUlo7QUFTRSxXQUFPLEVBQUMsVUFUVjtBQVVFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRyxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLFNBQXRCLEVBQWlDLFNBQWpDLEVBQTRDWixHQUE1QyxDQUFnRCxVQUFBc0IsSUFBSTtBQUFBLFdBQ25ELE1BQUMsbUVBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQWY7QUFBcUIsV0FBSyxFQUFFQSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLElBREgsQ0FEbUQ7QUFBQSxHQUFwRCxDQWJILENBREYsQ0FERixFQXNCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsVUFBTSxNQUhSO0FBSUUsU0FBSyxFQUFDLDZCQUpSO0FBS0UsUUFBSSxFQUFDLGdCQUxQO0FBTUUsU0FBSyxFQUFFckYsY0FOVDtBQU9FLFlBQVEsRUFBRXVELFlBUFo7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQVdFLFdBQU8sRUFBQyxVQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLG1FQUFEO0FBQVUsT0FBRyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFFLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FiRixFQWdCRSxNQUFDLG1FQUFEO0FBQVUsT0FBRyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFoQkYsQ0FERixDQXRCRixFQTRDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsWUFBUSxFQUFFLENBQUMzRSxjQUFELEdBQWlCLElBQWpCLEdBQXdCLEtBRnBDO0FBR0UsUUFBSSxFQUFDLGFBSFA7QUFJRSxNQUFFLEVBQUMsc0JBSkw7QUFLRSxTQUFLLEVBQUMsMENBTFI7QUFNRSxXQUFPLEVBQUMsVUFOVjtBQU9FLFNBQUssRUFBRUMsV0FQVDtBQVFFLFlBQVEsRUFBRXNELFlBUlo7QUFTRSxlQUFXLEVBQUMsb0JBVGQ7QUFVRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1Q0YsQ0FGRixFQStERSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBL0RGLEVBa0VFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLFFBQVQ7QUFBbUJGLFdBQUssRUFBRTtBQUExQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyxnQ0FGTDtBQUdFLFVBQU0sTUFIUjtBQUlFLFNBQUssRUFBQyx3Q0FKUjtBQUtFLFFBQUksRUFBQyxlQUxQO0FBTUUsU0FBSyxFQUFFa0YsYUFOVDtBQU9FLFlBQVEsRUFBRXFELFlBUFo7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQVdFLFdBQU8sRUFBQyxVQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FhRSxNQUFDLG1FQUFEO0FBQVUsT0FBRyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWdCRSxNQUFDLG1FQUFEO0FBQVUsT0FBRyxFQUFDLEdBQWQ7QUFBa0IsU0FBSyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsQ0FERixDQURGLEVBdUJJekUsYUFBYSxLQUFLLE1BQW5CLEdBQ0MsbUVBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsUUFBSSxFQUFDLFlBSlA7QUFLRSxNQUFFLEVBQUMscUJBTEw7QUFNRSxTQUFLLEVBQUMsYUFOUjtBQU9FLFdBQU8sRUFBQyxVQVBWO0FBUUUsU0FBSyxFQUFFSyxVQVJUO0FBU0UsWUFBUSxFQUFFZ0QsWUFUWjtBQVVFLGVBQVcsRUFBQyxtQkFWZDtBQVdFLG1CQUFlLEVBQUU7QUFDZm9CLFlBQU0sRUFBRTtBQURPLEtBWG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBa0JFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFrQixNQUFFLEVBQUUsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxZQUFRLE1BRlY7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLFFBQUksRUFBQyxLQUpQO0FBS0UsTUFBRSxFQUFDLGNBTEw7QUFNRSxTQUFLLEVBQUMsS0FOUjtBQU9FLFdBQU8sRUFBQyxVQVBWO0FBUUUsU0FBSyxFQUFFbkUsR0FSVDtBQVNFLFlBQVEsRUFBRStDLFlBVFo7QUFVRSxlQUFXLEVBQUMsV0FWZDtBQVdFLG1CQUFlLEVBQUU7QUFDZm9CLFlBQU0sRUFBRTtBQURPLEtBWG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixFQW1DRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLENBQWY7QUFBa0IsTUFBRSxFQUFFLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FEVDtBQUVFLFNBQUssRUFBQyxnQkFGUjtBQUdFLFFBQUksRUFBQyxTQUhQO0FBSUUsY0FBVSxFQUFDLGtCQUpiO0FBS0UsV0FBTyxFQUFFUSxJQUxYO0FBTUUsV0FBTyxFQUFFLElBQUlDLElBQUosQ0FBU0QsSUFBSSxDQUFDRyxXQUFMLEtBQXFCLENBQTlCLEVBQWlDSCxJQUFJLENBQUNJLFFBQUwsRUFBakMsRUFBa0RKLElBQUksQ0FBQ0ssT0FBTCxFQUFsRCxDQU5YO0FBT0UsU0FBSyxFQUFFL0UsT0FQVDtBQVFFLFlBQVEsRUFBRThDLFlBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkNGLENBREQsR0FtREQsbUVBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLFlBQVEsTUFGVjtBQUdFLE1BQUUsRUFBQywyQkFITDtBQUlFLFVBQU0sTUFKUjtBQUtFLFNBQUssRUFBQyxXQUxSO0FBTUUsZUFBVyxFQUFDLGlCQU5kO0FBT0UsUUFBSSxFQUFDLFVBUFA7QUFRRSxTQUFLLEVBQUVwRCxRQVJUO0FBU0UsWUFBUSxFQUFFb0QsWUFUWjtBQVVFLG1CQUFlLEVBQUU7QUFDZm9CLFlBQU0sRUFBRTtBQURPLEtBVm5CO0FBYUUsV0FBTyxFQUFDLFVBYlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVHM0csS0FBSyxDQUFDK0YsR0FBTixDQUFVLFVBQUMzRCxJQUFELEVBQU9xRixLQUFQO0FBQUEsV0FDVCxNQUFDLG1FQUFEO0FBQVUsU0FBRyxFQUFFQSxLQUFmO0FBQXNCLFdBQUssRUFBRXJGLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsSUFESCxDQURTO0FBQUEsR0FBVixDQWZILENBREYsQ0FERixFQXdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsWUFBUSxNQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxRQUFJLEVBQUMsZUFKUDtBQUtFLE1BQUUsRUFBQyx3QkFMTDtBQU1FLFNBQUssRUFBQyxnQkFOUjtBQU9FLFdBQU8sRUFBQyxVQVBWO0FBUUUsU0FBSyxFQUFFQyxhQVJUO0FBU0UsWUFBUSxFQUFFa0QsWUFUWjtBQVVFLGVBQVcsRUFBQyxzQkFWZDtBQVdFLG1CQUFlLEVBQUU7QUFDZm9CLFlBQU0sRUFBRTtBQURPLEtBWG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXhCRixDQTFFRixDQWxFRixFQXVMRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBdkxGLEVBMExFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLFFBQVQ7QUFBbUJGLFdBQUssRUFBRTtBQUExQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFPLFNBQUssRUFBRTtBQUFDUixxQkFBZSxFQUFFLFNBQWxCO0FBQTZCTyxhQUFPLEVBQUU7QUFBdEMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFIRixDQURGLENBREYsQ0FERixFQVVFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxZQUFRLEVBQUVzSixVQURaO0FBRUUsY0FBVSxFQUFFLENBRmQ7QUFHRSxpQkFBYSxFQUFFLENBQUMsWUFBRCxFQUFlLFdBQWYsRUFBNEIsaUJBQTVCLENBSGpCO0FBSUUsZ0JBQVksRUFBRSxJQUpoQjtBQUtFLGVBQVcsRUFBRSxPQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBMUxGLENBREY7QUFrTkQsQ0FyTkg7O01BQU1hLEs7O0FBdU5OLElBQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQXdEO0FBQUEsTUFBdERoQyxPQUFzRCxTQUF0REEsT0FBc0Q7QUFBQSxNQUE3Q0YsV0FBNkMsU0FBN0NBLFdBQTZDO0FBQUEsTUFBeEJuRixpQkFBd0IsU0FBaEN1QyxLQUFnQyxDQUF4QnZDLGlCQUF3QjtBQUNwRSxTQUNFO0FBQUssYUFBUyxFQUFFcUYsT0FBTyxDQUFDdEksWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBTyxhQUFTLEVBQUVzSSxPQUFPLENBQUNySCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRVksa0JBQVksRUFBRTtBQUFoQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQ0UsV0FBTyxFQUFDLFNBRFY7QUFFRSxhQUFTLEVBQUV5RyxPQUFPLENBQUMvRyxTQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBT0UsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUUrRyxPQUFPLENBQUM3RyxXQUEvQztBQUE0RCxnQkFBWSxNQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZEQVBGLENBREYsRUFhRTtBQUNFLFNBQUssRUFBRTtBQUNMRSxZQUFNLEVBQUUsR0FESDtBQUVMaEMsYUFBTyxFQUFFLEVBRko7QUFHTDRLLFlBQU0sRUFBRSxnQkFISDtBQUlMckosa0JBQVksRUFBRSxLQUpUO0FBS0xzSixlQUFTLEVBQUU7QUFMTixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLHFFQUFEO0FBQ0UsV0FBTyxFQUFDLFdBRFY7QUFFRSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRTtBQUFkLEtBRlQ7QUFHRSxnQkFBWSxNQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEYsRUFnQkUsTUFBQyxxRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixnQkFBWSxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGt3QkFoQkYsRUFrQ0UsTUFBQyxxRUFBRDtBQUNFLFdBQU8sRUFBQyxXQURWO0FBRUUsU0FBSyxFQUFFO0FBQUVBLGdCQUFVLEVBQUU7QUFBZCxLQUZUO0FBR0UsZ0JBQVksTUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxDRixFQXlDRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGdCQUFZLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNjJCQXpDRixDQWJGLEVBMkVFLE1BQUMsb0VBQUQ7QUFBVyxPQUFHLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkVBQUQ7QUFDRSxXQUFPLEVBQ0wsTUFBQyxtRUFBRDtBQUNFLFVBQUksRUFBQyxtQkFEUDtBQUVFLGFBQU8sRUFBRXhILGlCQUZYO0FBR0UsY0FBUSxFQUFFbUYsV0FIWjtBQUlFLFdBQUssRUFBQyxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVNFLFNBQUssRUFBQyxtREFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0EzRUYsQ0FERixDQURGO0FBNkZELENBOUZEOztNQUFNa0MsSzs7QUFnR04sSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBaUU7QUFBQSxNQUEvRHBDLE9BQStELFNBQS9EQSxPQUErRDtBQUFBLE1BQXRESCxZQUFzRCxTQUF0REEsWUFBc0Q7QUFBQSxNQUF4Q2hILFlBQXdDLFNBQXhDQSxZQUF3QztBQUFBLE1BQWxCZ0MsV0FBa0IsU0FBMUJxQyxLQUEwQixDQUFsQnJDLFdBQWtCO0FBQzdFLFNBQ0UsTUFBQyxnRUFBRDtBQUFPLGFBQVMsRUFBRW1GLE9BQU8sQ0FBQ3JILEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFRSxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRW1ILE9BQU8sQ0FBQ2pILFdBQS9CO0FBQTRDLFdBQU8sRUFBQyxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c4QixXQURILENBREYsRUFJRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBRW1GLE9BQU8sQ0FBQzdHLFdBQS9DO0FBQTRELGdCQUFZLE1BQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBQzhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEOUQsNkdBSkYsQ0FERixFQVVFLE1BQUMscUVBQUQ7QUFBWSxhQUFTLEVBQUU2RyxPQUFPLENBQUMvRyxTQUEvQjtBQUEwQyxXQUFPLEVBQUMsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRixFQVdFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDekIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsYUFBUyxFQUFFMEksT0FBTyxDQUFDeEksTUFGckI7QUFHRSxNQUFFLEVBQUMsMkJBSEw7QUFJRSxTQUFLLEVBQUMsVUFKUjtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsY0FBVSxFQUFFO0FBQ1Y2SyxvQkFBYyxFQUNaLE1BQUMseUVBQUQ7QUFBZ0IsZ0JBQVEsRUFBQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREY7QUFGUSxLQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBaUJFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUVyQyxPQUFPLENBQUN4SSxNQUZyQjtBQUdFLE1BQUUsRUFBQyxnQkFITDtBQUlFLFNBQUssRUFBQyxTQUpSO0FBS0UsV0FBTyxFQUFDLFVBTFY7QUFNRSxjQUFVLEVBQUU7QUFDVjZLLG9CQUFjLEVBQ1osTUFBQyx5RUFBRDtBQUFnQixnQkFBUSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUZRLEtBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakJGLEVBaUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUVyQyxPQUFPLENBQUN4SSxNQUZyQjtBQUdFLE1BQUUsRUFBQyxrQkFITDtBQUlFLFNBQUssRUFBQyxXQUpSO0FBS0UsV0FBTyxFQUFDLFVBTFY7QUFNRSxjQUFVLEVBQUU7QUFDVjZLLG9CQUFjLEVBQ1osTUFBQyx5RUFBRDtBQUFnQixnQkFBUSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUZRLEtBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakNGLEVBaURFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxhQUFTLEVBQUVyQyxPQUFPLENBQUN4SSxNQUZyQjtBQUdFLE1BQUUsRUFBQyxpQkFITDtBQUlFLFNBQUssRUFBQyxXQUpSO0FBS0UsV0FBTyxFQUFDLFVBTFY7QUFNRSxjQUFVLEVBQUU7QUFDVjZLLG9CQUFjLEVBQ1osTUFBQyx5RUFBRDtBQUFnQixnQkFBUSxFQUFDLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERjtBQUZRLEtBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakRGLENBWEYsRUE2RUUsTUFBQyxxRUFBRDtBQUFZLGFBQVMsRUFBRXJDLE9BQU8sQ0FBQy9HLFNBQS9CO0FBQTBDLFdBQU8sRUFBQyxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTdFRixFQThFRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFK0csT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQStELGdCQUFZLE1BQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUVGLEVBZ0ZFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsTUFBRSxFQUFDLHFDQUhMO0FBSUUsU0FBSyxFQUFDLFlBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFlBQVEsRUFBRXVJLFlBTlo7QUFPRSxlQUFXLEVBQUMseUJBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxXQUFPLEVBQUMsVUFKVjtBQUtFLFFBQUksRUFBQyxrQkFMUDtBQU1FLFlBQVEsRUFBRXBCLFlBTlo7QUFPRSxlQUFXLEVBQUMsd0JBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLFNBQUssRUFBQyxlQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxlQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlCRixFQTZDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHlCQUZMO0FBR0UsU0FBSyxFQUFDLGVBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLGdCQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdDRixDQWhGRixFQTZJRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQStELGdCQUFZLE1BQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0lGLEVBK0lFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsTUFBRSxFQUFDLHFDQUhMO0FBSUUsU0FBSyxFQUFDLFlBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFlBQVEsRUFBRXVJLFlBTlo7QUFPRSxlQUFXLEVBQUMseUJBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxXQUFPLEVBQUMsVUFKVjtBQUtFLFFBQUksRUFBQyxrQkFMUDtBQU1FLFlBQVEsRUFBRXBCLFlBTlo7QUFPRSxlQUFXLEVBQUMsd0JBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLFNBQUssRUFBQyxlQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxlQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlCRixFQTZDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHlCQUZMO0FBR0UsU0FBSyxFQUFDLGVBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLGdCQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdDRixDQS9JRixFQTRNRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQStELGdCQUFZLE1BQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNU1GLEVBOE1FLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsTUFBRSxFQUFDLHFDQUhMO0FBSUUsU0FBSyxFQUFDLFlBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFlBQVEsRUFBRXVJLFlBTlo7QUFPRSxlQUFXLEVBQUMseUJBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxXQUFPLEVBQUMsVUFKVjtBQUtFLFFBQUksRUFBQyxrQkFMUDtBQU1FLFlBQVEsRUFBRXBCLFlBTlo7QUFPRSxlQUFXLEVBQUMsd0JBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLFNBQUssRUFBQyxlQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxlQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlCRixFQTZDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHlCQUZMO0FBR0UsU0FBSyxFQUFDLGVBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLGdCQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdDRixDQTlNRixFQTJRRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQStELGdCQUFZLE1BQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM1FGLEVBNlFFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsTUFBRSxFQUFDLHFDQUhMO0FBSUUsU0FBSyxFQUFDLFlBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFlBQVEsRUFBRXVJLFlBTlo7QUFPRSxlQUFXLEVBQUMseUJBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxXQUFPLEVBQUMsVUFKVjtBQUtFLFFBQUksRUFBQyxrQkFMUDtBQU1FLFlBQVEsRUFBRXBCLFlBTlo7QUFPRSxlQUFXLEVBQUMsd0JBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLFNBQUssRUFBQyxlQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxlQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlCRixFQTZDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHlCQUZMO0FBR0UsU0FBSyxFQUFDLGVBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLGdCQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdDRixDQTdRRixFQTBVRSxNQUFDLHFFQUFEO0FBQVksYUFBUyxFQUFFakIsT0FBTyxDQUFDOUcsWUFBL0I7QUFBNkMsV0FBTyxFQUFDLFNBQXJEO0FBQStELGdCQUFZLE1BQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMVVGLEVBNFVFLE1BQUMsK0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQTRCLFNBQUssRUFBRTtBQUFDMUIsWUFBTSxFQUFFLENBQVQ7QUFBWUYsV0FBSyxFQUFFO0FBQW5CLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsTUFBRSxFQUFDLHFDQUhMO0FBSUUsU0FBSyxFQUFDLFlBSlI7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFlBQVEsRUFBRXVJLFlBTlo7QUFPRSxlQUFXLEVBQUMseUJBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQWdCRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLDJCQUZMO0FBR0UsU0FBSyxFQUFDLFdBSFI7QUFJRSxXQUFPLEVBQUMsVUFKVjtBQUtFLFFBQUksRUFBQyxrQkFMUDtBQU1FLFlBQVEsRUFBRXBCLFlBTlo7QUFPRSxlQUFXLEVBQUMsd0JBUGQ7QUFRRSxtQkFBZSxFQUFFO0FBQ2JvQixZQUFNLEVBQUU7QUFESyxLQVJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FoQkYsRUE4QkUsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLE1BQUUsRUFBQyx3QkFGTDtBQUdFLFNBQUssRUFBQyxlQUhSO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxXQUFPLEVBQUMsVUFMVjtBQU1FLFFBQUksRUFBQyxlQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlCRixFQTZDRSxNQUFDLCtEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQ0UsYUFBUyxNQURYO0FBRUUsTUFBRSxFQUFDLHlCQUZMO0FBR0UsU0FBSyxFQUFDLGVBSFI7QUFJRSxRQUFJLEVBQUMsUUFKUDtBQUtFLFdBQU8sRUFBQyxVQUxWO0FBTUUsUUFBSSxFQUFDLGdCQU5QO0FBT0UsWUFBUSxFQUFFcEIsWUFQWjtBQVFFLGVBQVcsRUFBQyw2QkFSZDtBQVNFLG1CQUFlLEVBQUU7QUFDYm9CLFlBQU0sRUFBRTtBQURLLEtBVG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTdDRixDQTVVRixDQURGO0FBNFlELENBN1lEOztNQUFNbUIsSzs7QUErWU4sSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBeUM7QUFBQSxNQUF2Q3RDLE9BQXVDLFNBQXZDQSxPQUF1QztBQUFBLE1BQTlCdUMsSUFBOEIsU0FBOUJBLElBQThCO0FBQUEsTUFBaEJ6SCxTQUFnQixTQUF4Qm9DLEtBQXdCLENBQWhCcEMsU0FBZ0I7QUFDckQsU0FDRTtBQUFLLGFBQVMsRUFBRWtGLE9BQU8sQ0FBQ3ZJLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQU8sYUFBUyxFQUFFdUksT0FBTyxDQUFDckgsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCLEdBRGxCLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbUMsU0FESCxRQUZGLENBREYsRUFRRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBUkYsRUFhRSxNQUFDLHFFQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGdCQUFZLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUVBYkYsRUFnQkUsTUFBQyxpRUFBRDtBQUFRLGFBQVMsTUFBakI7QUFBa0IsV0FBTyxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBRXlILElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBaEJGLENBREYsQ0FERixDQURGLENBREY7QUE0QkQsQ0E3QkQ7O01BQU1ELEs7QUErQlNwSSw4SUFBVSxDQUFDeEQsTUFBRCxDQUFWLENBQW1CNkQsbUJBQW5CLENBQWY7QUFFQTtBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLmQwZGRlYzA3NTQ5ZGIwZTQ4NTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtUcmFuc2l0aW9ufSBmcm9tICdyZWFjdC1zcHJpbmcvcmVuZGVycHJvcHMuY2pzJztcbmltcG9ydCB7YW5pbWF0ZWQsIGNvbmZpZ30gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IFN0ZXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBJY29uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge0Ryb3B6b25lQXJlYX0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xuaW1wb3J0IEluc3RhZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0luc3RhZ3JhbSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0FjdGl2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNBY3RpdmUnO1xuaW1wb3J0IEFjY291bnRCb3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94JztcbmltcG9ydCBTdXBlcnZpc2VkVXNlckNpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1cGVydmlzZWRVc2VyQ2lyY2xlJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9waWNrZXJzXCI7XG5pbXBvcnQgQmFjayBmcm9tIFwiLi9jb21tb24vQmFja1wiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9xdWVzdGlvbnMnO1xuLy8gaW1wb3J0IFBheXN0YWNrIGZyb20gJy4uL3V0aWxzL2F4aW9zLnBheXN0YWNrJztcbmltcG9ydCBBcGkgZnJvbSAnLi4vdXRpbHMvYXhpb3Muc2VydmljZSc7XG5pbXBvcnQgcmVnaW9ucyBmcm9tICcuL2RhdGEvc2F1ZGlfcmVnaW9uc19saXRlLmpzb24nO1xuaW1wb3J0IGluZGlnbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvaW5kaWdvJztcblxuY29uc3QgQW5pbWF0ZWRHcmlkID0gYW5pbWF0ZWQoR3JpZClcbmNvbnN0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoJ2xvY2FsLXN0b3JhZ2UnKVxuY29uc3QgYmFja2dyb3VuZFNoYXBlID0gcmVxdWlyZShcIi4uL3B1YmxpYy9pbWFnZXMvc2hhcGUuc3ZnXCIpO1xuXG5udW1lcmFsLmRlZmF1bHRGb3JtYXQoXCIwLDAwMFwiKTtcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbXCJBMTAwXCJdLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjAgNDAwcHhcIixcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIHBhZGRpbmc6ICcyMCAwJyxcbiAgICB3aWR0aDogXCIxMDAlXCJcbiAgfSxcblxuICBncmlkOiB7XG4gICAgbWFyZ2luOiAwXG4gIH0sXG4gIHNtYWxsQ29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiXG4gIH0sXG4gIGJpZ0NvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMCVcIlxuICB9LFxuICBzdGVwQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH0sXG4gIHN0ZXBHcmlkOiB7XG4gICAgd2lkdGg6IFwiODAlXCJcbiAgfSxcbiAgYmFja0J1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIG91dGxpbmVkQnV0dG9tOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSlcbiAgfSxcbiAgc3RlcHBlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXCI6e1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9XG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgZmxleEdyb3c6IDAsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG5cbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIHdpZHRoOiAnMTAwJSdcbiAgfSxcbiAgc3VjY2Vzc1BhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCdcbiAgfSxcbiAgc3VjY2Vzc1RleHQ6IHtcbiAgICBtYXJnaW46ICc1cHggMCcsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgZm9ybVBhcGVyOiB7XG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBmb3JtTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICBjb2xvcjp0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICB9LFxuICBmb3JtU3ViTGFiZWw6IHtcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZvcm1DYXB0aW9uOntcbiAgICBwYWRkaW5nOiA4LFxuICAgIGZvbnRTaXplOiAnMXJlbScsXG4gIH0sXG4gIGZpeGVkSGVpZ2h0OiB7XG4gICAgaGVpZ2h0OiAyNTAsXG4gIH0sXG4gIHRvcEluZm86IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDQyXG4gIH0sXG4gIGZvcm1Db250cm9sOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgJyYgLk11aVRleHRGaWVsZC1yb290Jzoge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgIH0sXG4gIH0sXG4gIHNlbGVjdEVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIGJvcmRlckNvbHVtbjoge1xuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVtcIjEwMFwiXX1gLFxuICAgIHBhZGRpbmdCb3R0b206IDI0LFxuICAgIG1hcmdpbkJvdHRvbTogMjRcbiAgfSxcbiAgYnV0dG9uUHJvZ3Jlc3M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgLy8gdG9wOiAnNTAlJyxcbiAgICAvLyBsZWZ0OiAnNTAlJyxcbiAgICAvLyBtYXJnaW5Ub3A6IC0xMixcbiAgICAvLyBtYXJnaW5MZWZ0OiAtMTIsXG4gIH0sXG4gIGZsZXhCYXI6IHtcbiAgICBtYXJnaW5Ub3A6IDMyLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJmbGV4LWVuZFwiLFxuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVwiOntcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCdcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBDdXN0b21TdGVwSWNvbiA9IHdpdGhTdHlsZXMoe1xuICB0ZXh0OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9XG59KShTdGVwSWNvbilcblxuXG5jb25zdCBnZXRTdGVwcyA9ICgpID0+IHtcbiAgcmV0dXJuIFtcIklOU1RSVUNUSU9OU1wiLCBcIlBFUlNPTkFMIElORk9cIiwgXCJERU1PR1JBUEhJQ1NcIiwgXCJFTElHSUJJTElUWVwiLCBcIkFHUkVFTUVOVFwiLCBcIk9USEVSIElORk9cIiwgXCJDT01QTEVURVwiXTtcbn07XG5cbmNvbnN0IGJhbmtzID0gWydUaGUgTmF0aW9uYWwgQ29tbWVyY2lhbCBCYW5rJywgJ1RoZSBTYXVkaSBCcml0aXNoIEJhbmsnLCAnU2F1ZGkgSW52ZXN0bWVudCBCYW5rJywnYWxpbm1hIGJhbmsnLCdCYW5xdWUgU2F1ZGkgRnJhbnNpJywnUml5YWQgQmFuaycsICdTYW1iYSBGaW5hbmNpYWwgR3JvdXAgKFNhbWJhKScsICdhbGF3d2FsIGJhbmsnLCAnQWwgUmFqaGkgQmFuaycsICdBcmFiIE5hdGlvbmFsIEJhbmsnLCAnQmFuayBBbEJpbGFkJywgJ0JhbmsgQWxKYXppcmEnLCAnR3VsZiBJbnRlcm5hdGlvbmFsIEJhbmsgU2F1ZGkgQXJpYmlhIChHSUItU0EpJ11cblxuY2xhc3MgTG9hbkFwcGxpY2F0aW9uRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGFjdGl2ZVN0ZXA6IDAsXG4gICAgdGVybXNDaGVja2VkOiBmYWxzZSxcbiAgICBjb25kaXRpb25zQ2hlY2tlZDogZmFsc2UsXG4gICAgbGFiZWxXaWR0aDogMCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZmlyc3ROYW1lOiB0aGlzLnByb3BzLmZpcnN0TmFtZSxcbiAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3RfbmFtZSxcbiAgICBOYXRpb25hbElkTm86IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA/IHRoaXMucHJvcHMuZGF0YS5uYXRpb25hbF9pZCA6ICcnLFxuICAgIGRvYjogdGhpcy5wcm9wcy5kYXRhLmRvYiA/IHRoaXMucHJvcHMuZGF0YS5kb2IgOiAnJyxcbiAgICBlbWFpbDogdGhpcy5wcm9wcy5lbWFpbCxcbiAgICBtb2JpbGU6IHRoaXMucHJvcHMuZGF0YS5tb2JpbGUgPyB0aGlzLnByb3BzLmRhdGEubW9iaWxlIDogJycsXG4gICAgYWRkcmVzczogdGhpcy5wcm9wcy5kYXRhLmFkZHJlc3MgPyB0aGlzLnByb3BzLmRhdGEuYWRkcmVzcyA6ICcnLFxuICAgIHJlZ2lvbjogJycsXG4gICAgZ2VuZGVyOiB0aGlzLnByb3BzLmRhdGEuZ2VuZGVyID8gdGhpcy5wcm9wcy5kYXRhLmdlbmRlciA6ICcnLFxuICAgIGVkdWNhdGlvbjogJycsXG4gICAgZXRobmljaXR5OicnLFxuICAgIGVtcGxveWVlUmVmZXJlbmNlOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfcmVmZXJlbmNlID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX3JlZmVyZW5jZSA6ICcnLFxuICAgIGVtcGxveWVlTnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuZW1wbG95ZWVfbnVtYmVyID8gdGhpcy5wcm9wcy5kYXRhLmVtcGxveWVlX251bWJlciA6ICcnLFxuICAgIHNhbGFyeTogdGhpcy5wcm9wcy5kYXRhLnNhbGFyeSA/IHRoaXMucHJvcHMuZGF0YS5zYWxhcnkgOiAnJyxcbiAgICBxdWVzdGlvbnM6JycsXG4gICAgbW9iaWxlQ2hlY2s6IGZhbHNlLFxuICAgIGFkZHJlc3NDaGVjazogZmFsc2UsXG4gICAgZ3JhY2VQZXJpb2Q6ICcnLFxuICAgIGhhc2NyZWRpdFNjb3JlOiBmYWxzZSxcbiAgICBjcmVkaXRTY29yZTogJycsXG4gICAgcmVwYXltZW50UGxhbjogJycsXG4gICAgYmFua05hbWU6IHRoaXMucHJvcHMuZGF0YS5iYW5rID8gdGhpcy5wcm9wcy5kYXRhLmJhbmsgOiAnJyxcbiAgICBhY2NvdW50TnVtYmVyOiB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgPyB0aGlzLnByb3BzLmRhdGEuYWNjb3VudF9udW1iZXIgOiAnJyxcbiAgICBiYW5rczogYmFua3MsXG4gICAgY2FyZE51bWJlcjogJycsXG4gICAgY3Z2OiAnJyxcbiAgICBleHBEYXRlOiAnJyxcbiAgICBmaWxlczogW11cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAvLyAgICAgICB0aGlzLnNvdXJjZS5jYW5jZWwoJ0NhbmNlbCBwcmV2aW91cyByZXF1ZXN0Jyk7XG4gICAgLy8gICB9XG4gICAgLy8gdGhpcy5zb3VyY2UgPSBQYXlzdGFjay5zb3VyY2UoKVxuICAgIC8vIFBheXN0YWNrLmJhbmtzKHsgY2FuY2VsVG9rZW46IHRoaXMuc291cmNlLnRva2VuIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7YmFua3M6IHJlc3BvbnNlLmRhdGEuZGF0YX0pXG4gICAgLy8gfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScpKVxuICAgIGlmIChmb3JtRGF0YSl7dGhpcy5zZXRTdGF0ZSh7Li4uZm9ybURhdGF9KX07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHJldHVybiB0aGlzLnNvdXJjZS5jYW5jZWwoJ3BheXN0YWNrIHJlcXVlc3QgY2FuY2VsZWQnKVxuICB9XG5cbiAgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBhY3RpdmVTdGVwOiBzdGF0ZS5hY3RpdmVTdGVwICsgMVxuICAgIH0pKTtcbiAgICBjb25zdCBkYXRhID0gey4uLnRoaXMuc3RhdGV9XG4gICAgZGVsZXRlIGRhdGEuYmFua3NcbiAgICBkZWxldGUgZGF0YS5maWxlc1xuICAgIGRlbGV0ZSBkYXRhLmxvYWRpbmdcbiAgICBkZWxldGUgZGF0YS5jYXJkTnVtYmVyXG4gICAgZGVsZXRlIGRhdGEuY3Z2XG4gICAgZGVsZXRlIGRhdGEuZXhwRGF0ZVxuICAgIGlmKGRhdGEuYWN0aXZlU3RlcCA8IDQpIHtcbiAgICBsb2NhbFN0b3JhZ2UoJ2Zvcm1zdGF0ZScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKX1cbiAgfTtcblxuICBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGFjdGl2ZVN0ZXA6IHN0YXRlLmFjdGl2ZVN0ZXAgLSAxXG4gICAgfSkpO1xuICB9O1xuXG4gIGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlU3RlcDogMFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVRlcm1zID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCwgbG9hZGluZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgc3RlcEFjdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNCkge1xuICAgICAgcmV0dXJuIFwiQWNjZXB0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDMpIHtcbiAgICAgIHJldHVybiBcIlN1Ym1pdFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSA2KSB7XG4gICAgICByZXR1cm4gXCJEb25lXCI7XG4gICAgfVxuICAgIHJldHVybiBcIk5leHRcIjtcbiAgfVxuXG4gIGdvVG9EYXNoYm9hcmQgPSBldmVudCA9PiB7XG4gICAgUm91dGVyLnJlbG9hZCgpXG4gIH07XG5cbiAgZ2V0Q2l0eSA9IGlkID0+IHtcbiAgICByZXR1cm4gY2l0aWVzLmZpbHRlcihjaXR5ID0+IHtcbiAgICAgIHJldHVybiBjaXR5LnJlZ2lvbl9pZCA9PT0gaWRcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZShmaWxlcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbGVzOiBmaWxlcyx9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gIH1cblxuICBzdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgIT09IDQgJiYgdGhpcy5zdGF0ZS5hY3RpdmVTdGVwICE9PSA2KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVOZXh0KClcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlU3RlcCA9PT0gNikge1xuICAgICAgcmV0dXJuIHRoaXMuZ29Ub0Rhc2hib2FyZCgpXG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxuICAgICAgY29uc3Qga3ljRm9ybSA9IHtcbiAgICAgICAgZmlyc3RfbmFtZTogdGhpcy5zdGF0ZS5maXJzdE5hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZSxcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIG5hdGlvbmFsX2lkOiB0aGlzLnN0YXRlLk5hdGlvbmFsSWRObyxcbiAgICAgICAgc2FsYXJ5OiB0aGlzLnN0YXRlLnNhbGFyeSxcbiAgICAgICAgZW1wbG95ZWVfcmVmZXJlbmNlOiB0aGlzLnN0YXRlLmVtcGxveWVlUmVmZXJlbmNlLFxuICAgICAgICBlbXBsb3llZV9udW1iZXI6IHRoaXMuc3RhdGUuZW1wbG95ZWVOdW1iZXIsXG4gICAgICAgIGdlbmRlcjogdGhpcy5zdGF0ZS5nZW5kZXIsXG4gICAgICAgIGJhbms6IHRoaXMuc3RhdGUuYmFua05hbWUsXG4gICAgICAgIG1vYmlsZTogdGhpcy5zdGF0ZS5tb2JpbGUsXG4gICAgICAgIGRvYjogdGhpcy5zdGF0ZS5kb2IsXG4gICAgICAgIHRlbnVyZTogdGhpcy5wcm9wcy5kYXRhLnRlbnVyZSxcbiAgICAgICAgaW5pdGlhbF9hbW91bnQ6IHRoaXMucHJvcHMuZGF0YS5pbml0aWFsX2Ftb3VudCxcbiAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxuICAgICAgICBhY2NvdW50X251bWJlcjogdGhpcy5zdGF0ZS5hY2NvdW50TnVtYmVyLFxuICAgICAgICBwYW46IHRoaXMuc3RhdGUuY2FyZE51bWJlcixcbiAgICAgICAgY3Z2OiB0aGlzLnN0YXRlLmN2dixcbiAgICAgICAgZXhwX2RhdGU6IHRoaXMuc3RhdGUuZXhwRGF0ZVxuICAgICAgfVxuICAgICAgQXBpLmt5Y1VwZGF0ZShKU09OLnN0cmluZ2lmeShreWNGb3JtKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xuICAgICAgICAgIFwiZW1haWxcIjogZGF0YS5lbWFpbCxcbiAgICAgICAgICBcImFtb3VudFwiOiBkYXRhLmluaXRpYWxfYW1vdW50LFxuICAgICAgICAgIFwibG9hbl9jb3NcIjogXCIxXCIsXG4gICAgICAgICAgXCJ0ZW51cmVcIjogZGF0YS50ZW51cmUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFwaURhdGEgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIEFwaS5sb2FuQXBwbGljYXRpb24oSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkZXNjcmlwdGlvbjogcmVzcG9uc2UuZGF0YS5kZXNjcmlwdGlvbn0pXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgY29uc3Qga2V5cyA9IFtcIm5hdGlvbmFsX2lkXCIsICdzdGF0ZW1lbnQnLCAnY29udHJhY3QnLCAncGF5c2xpcCddXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5zdGF0ZS5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICBrZXlzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLCB0aGlzLnN0YXRlLmZpbGVzW2ldLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdsb2FuX2lkJywgcmVzcG9uc2UuZGF0YS5kYXRhLmlkKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgZmlsZXMuLi4nKTtcbiAgICAgICAgICBBcGkuZG9jVXBsb2FkKGZvcm1EYXRhKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgICB9KS5jYXRjaChlcnJvcj0+e2NvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSlcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KCk7XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KVxuICAgICAgfSl9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZWR1bGlzdCA9IFsnTm9uZScsICdQcmltYXJ5JywgJ1NlY29uZGFyeScsICdEaXBsb21hJywgJ0JhY2hlbG9ycycsICdNYXN0ZXJzJywgJ0RvY3RvcmF0ZSddO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlO1xuICAgIGNvbnN0IGhhbmRsZVRlcm1zID0gdGhpcy5oYW5kbGVUZXJtc1xuICAgIGNvbnN0IGdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XG4gICAgY29uc3QgeyBhY3RpdmVTdGVwLCBmaXJzdE5hbWUsIGxvYWRpbmcsIHRlcm1zQ2hlY2tlZCwgY29uZGl0aW9uc0NoZWNrZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZml4ZWRIZWlnaHRQYXBlciA9IGNsc3goY2xhc3Nlcy5wYXBlciwgY2xhc3Nlcy5maXhlZEhlaWdodCk7XG4gICAgY29uc3Qgc3VjY2Vzc1BhcGVyID0gY2xzeChjbGFzc2VzLnBhcGVyLCBjbGFzc2VzLnN1Y2Nlc3NQYXBlcik7XG4gICAgY29uc3QgTGFiZWwgPSA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPlBMRUFTRSBDTElDSyBUTyBBR1JFRSBUTyBUSEUgVEVSTVMgQU5EIENPTkRJVElPTlM8L1R5cG9ncmFwaHk+XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIHsvKiA8QmFjayAvPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnN0ZXBwZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGVwcy5tYXAobGFiZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBMYWJlbCBTdGVwSWNvbkNvbXBvbmVudD17Q3VzdG9tU3RlcEljb259PntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9IG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gdmFsaWRhdGU9XCJ0cnVlXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0UGFwZXI9e2ZpeGVkSGVpZ2h0UGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBMYWJlbD17TGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtc0NoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfS8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDF9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDEpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXJtcz17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAyfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAyKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGVybXM9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkdWxpc3Q9e2VkdWxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9e3suLi50aGlzLnN0YXRlfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlZEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXthY3RpdmVTdGVwID09PSAzfVxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e251bGx9XG4gICAgICAgICAgICAgICAgICAgICAgZnJvbT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCg0MHB4LDAsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgZW50ZXI9e3sgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwcHgsMCknIH19XG4gICAgICAgICAgICAgICAgICAgICAgbGVhdmU9e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLTQwcHgsMCwwKScsIGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1zID0+IChhY3RpdmVTdGVwID09PSAzKSAmJiAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlZEdyaWQgc3R5bGU9e3Byb3BzfSBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFua3M9e2JhbmtzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNhdmU9e3RoaXMuaGFuZGxlU2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17YWN0aXZlU3RlcCA9PT0gNH1cbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIGZyb209e3sgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoNDBweCwwLDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGVudGVyPXt7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMHB4LDApJyB9fVxuICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC00MHB4LDAsMCknLCBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcyA9PiAoYWN0aXZlU3RlcCA9PT0gNCkgJiYgKHByb3BzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZWRHcmlkIHN0eWxlPXtwcm9wc30gaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRlcm1zPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDV9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDUpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm01XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzUGFwZXI9e3N1Y2Nlc3NQYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17ey4uLnRoaXMuc3RhdGV9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVkR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2FjdGl2ZVN0ZXAgPT09IDZ9XG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXt7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDQwcHgsMCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRlcj17eyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDBweCwwKScgfX1cbiAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT17eyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNDBweCwwLDApJywgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMgPT4gKGFjdGl2ZVN0ZXAgPT09IDYpICYmIChwcm9wcyA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVkR3JpZCBzdHlsZT17cHJvcHN9IGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm02XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoPXtnb1RvRGFzaGJvYXJkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXt7Li4udGhpcy5zdGF0ZX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZWRHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleEJhcn0+XG4gICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPCA1ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5hY3RpdmVTdGVwID09PSAwICYmICF0ZXJtc0NoZWNrZWQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLmFjdGl2ZVN0ZXAgPT09IDQgJiYgIWNvbmRpdGlvbnNDaGVja2VkKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvblByb2dyZXNzfS8+IDogdGhpcy5zdGVwQWN0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb3JtMCA9ICh7Zml4ZWRIZWlnaHRQYXBlciwgY2xhc3NlcywgZmlyc3ROYW1lLCB0ZXJtc0NoZWNrZWQsIGhhbmRsZUNoYW5nZSwgaGFuZGxlVGVybXMsIExhYmVsfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2ZpeGVkSGVpZ2h0UGFwZXJ9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT0ge2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+TG9hbiBBcHBsaWNhdGlvbiBJbnN0cnVjdGlvbnM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBJbnN0YUthc2ggYXBwbGljYXRpb24gcG9ydGFsIHtmaXJzdE5hbWV9LFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIHdlIHdpbGwgd2FsayB5b3UgdGhyb3VnaCB0aGUgZWFzeSBwcm9jZXNzIGFzIHlvdSBjb250aW51ZSB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIFBsZWFzZSBoYXZlIHRoZSBmb2xsb3dpbmcgZG9jdW1lbnRzIGF2YWxhYmxlOlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+QmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgeW91cnNlbGY8L2xpPlxuICAgICAgICAgICAgPGxpPkZvciBwZXJzb25hbCBsb2Fucywgc3BlY2lmeSBlbXBsb3llciwgZW1wbG95ZXIgcmVmcmVuY2UgbnVtYmVyLCB5b3VyIGN1cnJlbnQgc2FsYXJ5IDwvbGk+XG4gICAgICAgICAgICA8bGk+QSBwaWN0dXJlIG9mIHlvdSBmb3IgeW91ciBsb2FuIHByb2ZpbGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBZb3VyIGFwcGxpY2F0aW9uIGlzIGF1dG9tYXRpY2FsbHkgc2F2ZWQgYXMgeW91IGdvIHRocm91Z2ggdGhlIHByb2Nlc3NcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBGb3IgaW5xdWlyaWVzIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Zml4ZWRIZWlnaHRQYXBlcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPSB7Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cInN1YnRpdGxlMVwiID5BcHBsaWNhdGlvbiByZXF1aXJlbWVudHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBUaGUgZm9sbG93aW5nIGFyZSBzcGVjaWZpYyByZXF1aXJlbWVudHMgZm9yIGFwcGx5aW5nIGZvciBQT1AgbGVuZGluZ1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+UmVhZCBpbnN0cnVjdGlvbnM8L2xpPlxuICAgICAgICAgICAgPGxpPlByb3ZpZGUgYWxsIG90aGVyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgIDxsaT5FbXBsb3ltZW50IGhpc3RvcnkgPC9saT5cbiAgICAgICAgICAgIDxsaT5CVk4gPC9saT5cbiAgICAgICAgICAgIDxsaT5CYW5rIGRldGFpbHM8L2xpPlxuICAgICAgICAgICAgPGxpPkRvY3VtZW50cyBmb3IgYWNjb3VudCBzdGF0ZW1lbnRzPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBDbGljayBuZXh0IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RhZ2Ugb2YgeW91ciBJbnN0YUthc2ggYXBwbGljYXRpb25cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPEZvcm1Hcm91cCByb3c+XG4gICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBuYW1lPVwidGVybXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0ZXJtc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2hlY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWw9e0xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5jb25zdCBGb3JtMSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBoYW5kbGVUZXJtcywgc3RhdGU6IHtmaXJzdE5hbWUsIGxhc3ROYW1lLFxuICBkb2IsIG1vYmlsZSwgbW9iaWxlQ2hlY2ssIGVtcGxveWVlUmVmZXJlbmNlLCBlbXBsb3llZU51bWJlciwgc2FsYXJ5LCBhZGRyZXNzLFxuICBlbWFpbCwgcmVnaW9uLCBhZGRyZXNzQ2hlY2ssIE5hdGlvbmFsSWROb31cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSA+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlBFUlNPTkFMIElORk9STUFUSU9OPC9UeXBvZ3JhcGh5PlxuXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1uaW4taW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmF0aW9uYWwtaWQtbnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwiTmF0aW9uYWxJZE5vXCJcbiAgICAgICAgICAgIHZhbHVlPXtOYXRpb25hbElkTm99XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYXRpb25hbCBJRCBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1kb2ItaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIEJpcnRoXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICBmb3JtYXQ9XCJkZC9tbS95eXl5XCJcbiAgICAgICAgICAgIG5hbWU9XCJkb2JcIlxuICAgICAgICAgICAgdmFsdWU9e2RvYn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICAgIHZhbHVlPXttb2JpbGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJywgcGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwIHJvdz5cbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJy0xMHB4JywgbWFyZ2luTGVmdDowfX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttb2JpbGVDaGVja31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRlcm1zfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5Micgc3R5bGU9e3tmb250U2l6ZTogJzAuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IG9wdCBpbiBmb3Igc21zIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgb2Ygb2ZmZXJpbmdzIHNtcyBjaGFyZ2VzIGFwcGx5XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZVJlZmVyZW5jZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWVtcGxveWVlLXJlZmVyZW5jZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtcGxveWVyIEFkZHJlc3NcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZVJlZmVyZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1wbG95ZXJzIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlTnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtZW1wbG95ZWUtbnVtYmVyXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1wbG95ZWUgTnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOdW1iZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbXBsb3llZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Mn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgbmFtZT1cInNhbGFyeVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNhbGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIlNhbGFyeVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YWx1ZT17c2FsYXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTW9udGhseSBTYWxhcnkgQW1vdW50XCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYWRkcmVzc1wiXG4gICAgICAgICAgICBsYWJlbD1cIlBoeXNpY2FsIEFkZHJlc3MgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBob21lIGFkZHJlc3MsIHBsZWFzZSBzcGVjaWZ5IHN0cmVldCBuYW1lIG9yIHVzZSBsb2NhdGlvbiBmaW5kZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1yZWdpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkN1cnJlbnQgUmVnaW9uXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWdpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUmVnaW9uXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3JlZ2lvbnMubWFwKChyZWdpb24pID0+IChcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cmVnaW9uLnJlZ2lvbl9pZH0gdmFsdWU9e3JlZ2lvbi5yZWdpb25faWR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2PntyZWdpb24ubmFtZV9lbn08L2Rpdj48ZGl2PntyZWdpb24ubmFtZV9hcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7cGFkZGluZzogMH19PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0gc3R5bGU9e3tmbG9hdDogXCJsZWZ0XCJ9fT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnLTE1cHgnLCBtYXJnaW5MZWZ0OjAsIG1hcmdpblJpZ2h0OjB9fVxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzQ2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZGRyZXNzQ2hlY2t9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXJtc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbD17PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIHN0eWxlPXt7Zm9udFNpemU6ICcwLjVyZW0nfX0+XG4gICAgICAgICAgICAgICAgICBQbGVhc2UgaW5kaWNhdGUgaWYgeW91ciBhZGRyZXNzIGhhcyBjaGFuZ2VkIGluIHRoZSBwYXN0XG4gICAgICAgICAgICAgICAgICAzIHllYXJzLlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuXG4gIClcbn1cblxuY29uc3QgRm9ybTIgPSAoe2NsYXNzZXMsIGhhbmRsZUNoYW5nZSwgZWR1bGlzdCwgc3RhdGU6IHtnZW5kZXIsIGVkdWNhdGlvbiwgZXRobmljaXR5fX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+REVNT0dSQVBISUNTPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ2VuZGVyXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Z2VuZGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBwaWNrIHlvdXIgZ2VuZGVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nbWFsZScgdmFsdWU9J21hbGUnPlxuICAgICAgICAgICAgICBNYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nZmVtYWxlJyB2YWx1ZT0nZmVtYWxlJz5cbiAgICAgICAgICAgICAgRmVtYWxlXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1lZHVjYXRpb25cIlxuICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICBsYWJlbD1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVkdWNhdGlvblwiXG4gICAgICAgICAgICBuYW1lPVwiZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgIHZhbHVlPXtlZHVjYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2VkdWxpc3QubWFwKChsZXZlbCkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtsZXZlbH0gdmFsdWU9e2xldmVsfT5cbiAgICAgICAgICAgICAgICB7bGV2ZWx9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cImV0aG5pY2l0eVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLWV0aG5pY2l0eVwiXG4gICAgICAgICAgICBsYWJlbD1cIkV0aG5pY2l0eVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2V0aG5pY2l0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEV0aG5pY2l0eVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1BhcGVyPlxuICApXG59XG5cbmNvbnN0IEZvcm0zID0gKHtjbGFzc2VzLCBoYW5kbGVDaGFuZ2UsIGJhbmtzLCBoYW5kbGVTYXZlLFxuICBzdGF0ZToge2dyYWNlUGVyaW9kLCBoYXNjcmVkaXRTY29yZSwgY3JlZGl0U2NvcmUsIHJlcGF5bWVudFBsYW4sIGJhbmtOYW1lLCBhY2NvdW50TnVtYmVyLCBjYXJkTnVtYmVyLCBjdnYsIGV4cERhdGV9fSkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCI+RUxJR0lCSUxJVFk8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZ3JhY2VQZXJpb2RcIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbGlnaWJpbGl0eSBmb3IgZ3JhY2UgcGVyaW9kXCJcbiAgICAgICAgICAgICAgbmFtZT1cImdyYWNlUGVyaW9kXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dyYWNlUGVyaW9kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtbJzEgV2VlaycsICcyIFdlZWtzJywgJzMgV2Vla3MnLCAnMSBNb250aCddLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtZWR1Y2F0aW9uXCJcbiAgICAgICAgICAgICAgc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiRG8geW91IGhhdmUgYSBjcmVkaXQgc2NvcmU/XCJcbiAgICAgICAgICAgICAgbmFtZT1cImhhc2NyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2hhc2NyZWRpdFNjb3JlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT0nMScgdmFsdWU9e3RydWV9PlxuICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScwJyB2YWx1ZT17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshaGFzY3JlZGl0U2NvcmU/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgbmFtZT1cImNyZWRpdFNjb3JlXCJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1jcmVkaXRTY29yZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiSWYgeWVzLCBwbGVhc2UgcHJvdmlkZSB5b3VyIGNyZWRpdCBzY29yZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtjcmVkaXRTY29yZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDcmVkaXQgU2NvcmVcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9J2NhcHRpb24nPlxuICAgICAgICAgIERFQklUICYgUkVDT05DSUxJQVRJT04gQVVUSE9SSVpBVElPTlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogJzIwcHggMCcsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtcmVwYXltZW50LXBsYW5cIlxuICAgICAgICAgICAgICBzZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJIb3cgd291bGQgeW91IGxpa2UgdG8gcmVwYXkgeW91ciBsb2FuP1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXBheW1lbnRQbGFuXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JlcGF5bWVudFBsYW59XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PScxJyB2YWx1ZT1cIkJhbmtcIj5cbiAgICAgICAgICAgICAgICBCYW5rXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9JzAnIHZhbHVlPVwiQ2FyZFwiPlxuICAgICAgICAgICAgICAgIENhcmRcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7KHJlcGF5bWVudFBsYW4gPT09ICdDYXJkJykgP1xuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJkTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtY2FyZE51bWJlclwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2FyZE51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENhcmQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWN2dlwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNWVlwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N2dn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIENWVlwiXG4gICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXsyfT5cbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgdmlld3M9e1tcInllYXJcIiwgXCJtb250aFwiXX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWWVhciBhbmQgTW9udGhcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImV4cERhdGVcIlxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIldpdGggbWluIGFuZCBtYXhcIlxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgICAgIG1heERhdGU9e25ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSArIDMsIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2V4cERhdGV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgOlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC1iYW5rLW5hbWVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQmFuayBOYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEJhbmsgTmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImJhbmtOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmFua05hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YmFua3MubWFwKChiYW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtiYW5rfT5cbiAgICAgICAgICAgICAgICAgICAge2Jhbmt9XG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhY2NvdW50TnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFjY291bnROdW1iZXJcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQWNjb3VudCBOdW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FjY291bnROdW1iZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEFjY291bnQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvPn1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PSdjYXB0aW9uJz5cbiAgICAgICAgICBMSVNUIE9GIERPQ1VNRU5UUyBUTyBVUExPQURcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IDAnLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxQYXBlciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNlY2VjZWMnLCBwYWRkaW5nOiAnOHB4J319PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkEgcGFzc3BvcnQgcGhvdG9ncmFwaDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkJhbmsgc3RhdGVtZW50PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TGV0dGVyIG9mIGVtcGxveW1lbnQ8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fT5cbiAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNhdmV9XG4gICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezR9XG4gICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnYXBwbGljYXRpb24vcGRmJ119XG4gICAgICAgICAgICAgIHNob3dQcmV2aWV3cz17dHJ1ZX1cbiAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezUwMDAwMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7LyogPFF1ZXN0aW9ucyBlbWFpbD17ZW1haWx9Lz4gKi99XG4gICAgICA8L1BhcGVyPlxuICAgIClcbiAgfVxuXG5jb25zdCBGb3JtNCA9ICh7Y2xhc3NlcywgaGFuZGxlVGVybXMsIHN0YXRlOiB7Y29uZGl0aW9uc0NoZWNrZWR9fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJpZ0NvbnRhaW5lcn0+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiY2FwdGlvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRFUk1TICYgQ09ORElUSU9OU1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNhcHRpb259IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIFBsZWFzZSByZWFkIHRocm91Z2ggYW5kIGFjY2VwdCB0aGUgdGVybXMgJlxuICAgICAgICAgICAgY29uZGl0aW9uc1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMzAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2NjY1wiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH19XG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cbiAgICAgICAgICA+XG4gICAgICAgICAgICAxLiBZb3VyIGFncmVlbWVudFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICBCeSB1c2luZyB0aGlzIFNpdGUsIHlvdSBhZ3JlZSB0byBiZSBib3VuZCBieSwgYW5kIHRvXG4gICAgICAgICAgICBjb21wbHkgd2l0aCwgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMuIElmIHlvdSBkb1xuICAgICAgICAgICAgbm90IGFncmVlIHRvIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zLCBwbGVhc2UgZG9cbiAgICAgICAgICAgIG5vdCB1c2UgdGhpcyBzaXRlLiBQTEVBU0UgTk9URTogV2UgcmVzZXJ2ZSB0aGVcbiAgICAgICAgICAgIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byBjaGFuZ2UsIG1vZGlmeSBvclxuICAgICAgICAgICAgb3RoZXJ3aXNlIGFsdGVyIHRoZXNlIFRlcm1zIGFuZCBDb25kaXRpb25zIGF0IGFueVxuICAgICAgICAgICAgdGltZS4gVW5sZXNzIG90aGVyd2lzZSBpbmRpY2F0ZWQsIGFtZW5kbWVudHMgd2lsbFxuICAgICAgICAgICAgYmVjb21lIGVmZmVjdGl2ZSBpbW1lZGlhdGVseS4gUGxlYXNlIHJldmlldyB0aGVzZVxuICAgICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnMgcGVyaW9kaWNhbGx5LiBZb3VyIGNvbnRpbnVlZFxuICAgICAgICAgICAgdXNlIG9mIHRoZSBTaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBjaGFuZ2VzXG4gICAgICAgICAgICBhbmQvb3IgbW9kaWZpY2F0aW9ucyB3aWxsIGNvbnN0aXR1dGUgeW91ciBhY2NlcHRhbmNlXG4gICAgICAgICAgICBvZiB0aGUgcmV2aXNlZCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBhbmQgdGhlXG4gICAgICAgICAgICByZWFzb25hYmxlbmVzcyBvZiB0aGVzZSBzdGFuZGFyZHMgZm9yIG5vdGljZSBvZlxuICAgICAgICAgICAgY2hhbmdlcy4gRm9yIHlvdXIgaW5mb3JtYXRpb24sIHRoaXMgcGFnZSB3YXMgbGFzdFxuICAgICAgICAgICAgdXBkYXRlZCBhcyBvZiB0aGUgZGF0ZSBhdCB0aGUgdG9wIG9mIHRoZXNlIHRlcm1zIGFuZFxuICAgICAgICAgICAgY29uZGl0aW9ucy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDIuIFByaXZhY3lcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgUGxlYXNlIHJldmlldyBvdXIgUHJpdmFjeSBQb2xpY3ksIHdoaWNoIGFsc28gZ292ZXJuc1xuICAgICAgICAgICAgeW91ciB2aXNpdCB0byB0aGlzIFNpdGUsIHRvIHVuZGVyc3RhbmQgb3VyXG4gICAgICAgICAgICBwcmFjdGljZXMuIEJ5IHVzaW5nIHRoaXMgU2l0ZSwgeW91IGFncmVlIHRvIGJlIGJvdW5kXG4gICAgICAgICAgICBieSwgYW5kIHRvIGNvbXBseSB3aXRoLCB0aGVzZSBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cbiAgICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMsXG4gICAgICAgICAgICBwbGVhc2UgZG8gbm90IHVzZSB0aGlzIHNpdGUuIFBMRUFTRSBOT1RFOiBXZSByZXNlcnZlXG4gICAgICAgICAgICB0aGUgcmlnaHQsIGF0IG91ciBzb2xlIGRpc2NyZXRpb24sIHRvIGNoYW5nZSwgbW9kaWZ5XG4gICAgICAgICAgICBvciBvdGhlcndpc2UgYWx0ZXIgdGhlc2UgVGVybXMgYW5kIENvbmRpdGlvbnMgYXQgYW55XG4gICAgICAgICAgICB0aW1lLiBVbmxlc3Mgb3RoZXJ3aXNlIGluZGljYXRlZCwgYW1lbmRtZW50cyB3aWxsXG4gICAgICAgICAgICBiZWNvbWUgZWZmZWN0aXZlIGltbWVkaWF0ZWx5LiBQbGVhc2UgcmV2aWV3IHRoZXNlXG4gICAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9ucyBwZXJpb2RpY2FsbHkuIFlvdXIgY29udGludWVkXG4gICAgICAgICAgICB1c2Ugb2YgdGhlIFNpdGUgZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIGNoYW5nZXNcbiAgICAgICAgICAgIGFuZC9vciBtb2RpZmljYXRpb25zIHdpbGwgY29uc3RpdHV0ZSB5b3VyIGFjY2VwdGFuY2VcbiAgICAgICAgICAgIG9mIHRoZSByZXZpc2VkIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCB0aGVcbiAgICAgICAgICAgIHJlYXNvbmFibGVuZXNzIG9mIHRoZXNlIHN0YW5kYXJkcyBmb3Igbm90aWNlIG9mXG4gICAgICAgICAgICBjaGFuZ2VzLiBGb3IgeW91ciBpbmZvcm1hdGlvbiwgdGhpcyBwYWdlIHdhcyBsYXN0XG4gICAgICAgICAgICB1cGRhdGVkIGFzIG9mIHRoZSBkYXRlIGF0IHRoZSB0b3Agb2YgdGhlc2UgdGVybXMgYW5kXG4gICAgICAgICAgICBjb25kaXRpb25zLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb3JtR3JvdXAgcm93PlxuICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmRpdGlvbnNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25kaXRpb25zQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjaGVja1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbD1cIkkgaGF2ZSByZWFkIGFuZCB1bmRlcnN0b29kIHRoZSB0ZXJtcyAmIGNvbmRpdGlvbnNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtNSA9ICh7Y2xhc3NlcywgaGFuZGxlQ2hhbmdlLCBzdWNjZXNzUGFwZXIsIHN0YXRlOiB7ZGVzY3JpcHRpb259fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ID5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e3N1Y2Nlc3NQYXBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWNjZXNzVGV4dH0gdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNhcHRpb259IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBZb3UncmUgb25lIHN0ZXAgY2xvc2VyIHRvIGNvbXBsZXRpbmcgeW91ciBsb2FuIGFwcGxpY2F0aW9uLCA8YnIvPlxuICAgICAgICAgIEluc3Rha2FzaCB3b3VsZCBsaWtlIHRvIGdldCB5b3VyIHBlcnNvbmFsIHNvY2lhbCBtZWRpYSBkZXRhaWxzIGFuZCA1IG9mIHlvdXIgY2xvc2UgY29udGFjdHMgaW5mb3JtYXRpb24uXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvUGFwZXI+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiPlNPQ0lBTCBNRURJQSBIQU5ETEU8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJpbnB1dC13aXRoLWljb24tdGV4dGZpZWxkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFjZWJvb2tcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtdHdpdHRlclwiXG4gICAgICAgICAgICBsYWJlbD1cIlR3aXR0ZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgICAgICBpZD1cInNvY2lhbC1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgbGFiZWw9XCJJbnN0YWdyYW1cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbUljb24vPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxuICAgICAgICAgICAgaWQ9XCJzb2NpYWwtc25hcGNoYXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJTbmFwIENoYXRcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNBY3RpdmVJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1MYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIj5SRUZFUkVFIENPTlRBQ1QgSU5GTzwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSAxXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMWZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWUxZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUxbGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTFlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUxbW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTFtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDJcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUyZmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMmxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTJsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlMmVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMmVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTJtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlMm1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVN1YkxhYmVsfSB2YXJpYW50PVwiY2FwdGlvblwiIGd1dHRlckJvdHRvbT4gIFJlZmVyZWUgM1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9IHN0eWxlPXt7bWFyZ2luOiAwLCB3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTNmaXJzdE5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZXF1aXJlZC1yZWZlcmVlM2ZpcnN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRmlyc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzbGFzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlM2xhc3ROYW1lXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTGFzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWUzZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzZW1haWxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlM21vYmlsZVwiXG4gICAgICAgICAgICBsYWJlbD1cIk1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWUzbW9iaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtU3ViTGFiZWx9IHZhcmlhbnQ9XCJjYXB0aW9uXCIgZ3V0dGVyQm90dG9tPiAgUmVmZXJlZSA0XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gc3R5bGU9e3ttYXJnaW46IDAsIHdpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNGZpcnN0TmFtZVwiXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlcXVpcmVkLXJlZmVyZWU0Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBGaXJzdG5hbWVcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRsYXN0TmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU0bGFzdE5hbWVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBMYXN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTRlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRlbWFpbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXJlZmVyZWU0bW9iaWxlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTW9iaWxlIE51bWJlclwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTRtb2JpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUmVmZXJlZSBNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1TdWJMYWJlbH0gdmFyaWFudD1cImNhcHRpb25cIiBndXR0ZXJCb3R0b20+ICBSZWZlcmVlIDVcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBzdHlsZT17e21hcmdpbjogMCwgd2lkdGg6ICcxMDAlJ319PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInJlZmVyZWU1Zmlyc3ROYW1lXCJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVxdWlyZWQtcmVmZXJlZTVmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIEZpcnN0bmFtZVwiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cblxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNWxhc3ROYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBuYW1lPVwicmVmZXJlZTVsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIExhc3RuYW1lXCJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xuICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1yZWZlcmVlNWVtYWlsXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNWVtYWlsXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFJlZmVyZWUgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtcmVmZXJlZTVtb2JpbGVcIlxuICAgICAgICAgICAgbGFiZWw9XCJNb2JpbGUgTnVtYmVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG5hbWU9XCJyZWZlcmVlNW1vYmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBSZWZlcmVlIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5jb25zdCBGb3JtNiA9ICh7Y2xhc3NlcywgZGFzaCwgc3RhdGU6IHtmaXJzdE5hbWV9fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNtYWxsQ29udGFpbmVyfT5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciB4cz17MTJ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25ze1wiIFwifVxuICAgICAgICAgICAgICA8c3BhbiA+XG4gICAgICAgICAgICAgICAge2ZpcnN0TmFtZX0hISFcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEFuIGVtYWlsIGhhcyBiZWVuIHNlbnQgdG8geW91IHdpdGggeW91ciBsb2FuIGFwcGxpY2F0aW9uIElELlxuICAgICAgICAgICAgICBJZiB5b3Ugd2lzaCB0byBtYWtlIGVucXVpcmllcyBhYm91dCB5b3VyIGxvYW4sXG4gICAgICAgICAgICAgIHBsZWFzZSBzZW5kIGFuIGVtYWlsIHRvIGJvcnJvd0BJbnN0YUthc2guY29tLlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICBZb3VyIGRhc2hib2FyZCBpcyByZWFkeSBmb3IgeW91IHRvIHJldmlldyB5b3VyIGxvYW4gaGlzdG9yeVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17ZGFzaH0+XG4gICAgICAgICAgICAgIEJhY2sgdG8gRGFzaGJvYXJkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKExvYW5BcHBsaWNhdGlvbkZvcm0pO1xuXG57LyogPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsyfT5cbiAgPFRleHRGaWVsZFxuICBkaXNhYmxlZD17IXJlZ2lvbiA/IHRydWUgOiBmYWxzZX1cbiAgaWQ9XCJvdXRsaW5lZC1zZWxlY3QtY2l0eVwiXG4gIHNlbGVjdFxuICBsYWJlbD1cIkN1cnJlbnQgQ2l0eVwiXG4gIG5hbWU9XCJjaXR5XCJcbiAgdmFsdWU9e2NpdHl9XG4gIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gIElucHV0TGFiZWxQcm9wcz17e1xuICBzaHJpbms6IHRydWUsXG4gIH19XG4gIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gID5cbiAge3JlZ2lvbiA/ICh0aGlzLmdldENpdHkocmVnaW9uKS5tYXAoKGNpdHkpID0+IChcbiAgPE1lbnVJdGVtIGtleT17Y2l0eS5jaXR5X2lkfSB2YWx1ZT17Y2l0eS5jaXR5X2lkfT5cbiAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyx3aWR0aDonMTAwJSd9fT5cbiAgPGRpdj57Y2l0eS5uYW1lX2VufTwvZGl2PjxkaXY+e2NpdHkubmFtZV9hcn08L2Rpdj5cbiAgPC9kaXY+XG4gIDwvTWVudUl0ZW0+XG4gICkpKSA6ICh0aGlzLmdldENpdHkoMSkubWFwKChjaXR5KSA9PiAoXG4gIDxNZW51SXRlbSBrZXk9e2NpdHkuY2l0eV9pZH0gdmFsdWU9e2NpdHkubmFtZV9lbn0+XG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2Vlbicsd2lkdGg6JzEwMCUnfX0+XG4gIDxkaXY+e2NpdHkubmFtZV9lbn08L2Rpdj48ZGl2PntjaXR5Lm5hbWVfYXJ9PC9kaXY+XG4gIDwvZGl2PlxuICA8L01lbnVJdGVtPlxuICApKSl9XG4gIDwvVGV4dEZpZWxkPlxuPC9HcmlkPiAqL31cbiJdLCJzb3VyY2VSb290IjoiIn0=