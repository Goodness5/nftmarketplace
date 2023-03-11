"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getNftsForOwner";
exports.ids = ["pages/api/getNftsForOwner"];
exports.modules = {

/***/ "alchemy-sdk":
/*!******************************!*\
  !*** external "alchemy-sdk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("alchemy-sdk");

/***/ }),

/***/ "(api)/./pages/api/getNftsForOwner.js":
/*!**************************************!*\
  !*** ./pages/api/getNftsForOwner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alchemy-sdk */ \"alchemy-sdk\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { address , pageSize , chain , excludeFilter , pageKey  } = JSON.parse(req.body);\n    if (req.method !== \"POST\") {\n        res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n        return;\n    }\n    const settings = {\n        apiKey: process.env.ALCHEMY_API_KEY,\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Network[chain]\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.Alchemy(settings);\n    try {\n        const nfts = await alchemy.nft.getNftsForOwner(address, {\n            pageSize: pageSize ? pageSize : 100,\n            excludeFilters: excludeFilter && [\n                alchemy_sdk__WEBPACK_IMPORTED_MODULE_0__.NftFilters.SPAM\n            ],\n            pageKey: pageKey ? pageKey : \"\"\n        });\n        const formattedNfts = nfts.ownedNfts.map((nft)=>{\n            const { contract , title , tokenType , tokenId , description , media  } = nft;\n            console.log(nft.media);\n            return {\n                contract: contract.address,\n                symbol: contract.symbol,\n                collectionName: contract.openSea?.collectionName,\n                media: media[0]?.gateway ? media[0]?.gateway : \"https://via.placeholder.com/500\",\n                verified: contract.openSea?.safelistRequestStatus,\n                tokenType,\n                tokenId,\n                title,\n                description,\n                format: media[0]?.format ? media[0]?.format : \"png\"\n            };\n        });\n        if (excludeFilter) {\n            const filteredNfts = formattedNfts.filter((nft)=>nft.title.length && nft.description.length && nft.media);\n            if (filteredNfts) {\n                res.status(200).json({\n                    nfts: filteredNfts.length ? filteredNfts : null,\n                    pageKey: nfts.pageKey\n                });\n            }\n        } else {\n            res.status(200).json({\n                nfts: formattedNfts.length ? formattedNfts : null,\n                pageKey: nfts.pageKey\n            });\n        }\n    } catch (e) {\n        console.warn(e);\n        res.status(500).send({\n            message: \"something went wrong, check the log in your terminal\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0TmZ0c0Zvck93bmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUU1QyxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxNQUFNLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRUMsUUFBTyxFQUFFLEdBQUdDLEtBQUtDLEtBQUssQ0FDdEVSLElBQUlTLElBQUk7SUFFVCxJQUFJVCxJQUFJVSxNQUFNLEtBQUssUUFBUTtRQUMxQlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQTZCO1FBQzdEO0lBQ0QsQ0FBQztJQUVELE1BQU1DLFdBQVc7UUFDaEJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtRQUNuQ0MsU0FBU3ZCLGdEQUFPLENBQUNRLE1BQU07SUFDeEI7SUFFQSxNQUFNZ0IsVUFBVSxJQUFJdkIsZ0RBQU9BLENBQUNpQjtJQUU1QixJQUFJO1FBQ0gsTUFBTU8sT0FBTyxNQUFNRCxRQUFRRSxHQUFHLENBQUNDLGVBQWUsQ0FBQ3JCLFNBQVM7WUFDdkRDLFVBQVVBLFdBQVdBLFdBQVcsR0FBRztZQUNuQ3FCLGdCQUFnQm5CLGlCQUFpQjtnQkFBQ1Asd0RBQWU7YUFBQztZQUNsRFEsU0FBU0EsVUFBVUEsVUFBVSxFQUFFO1FBQ2hDO1FBRUEsTUFBTW9CLGdCQUFnQkwsS0FBS00sU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ04sTUFBUTtZQUNqRCxNQUFNLEVBQUVPLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FDaEVaO1lBQ0RhLFFBQVFDLEdBQUcsQ0FBQ2QsSUFBSVksS0FBSztZQUNyQixPQUFPO2dCQUNOTCxVQUFVQSxTQUFTM0IsT0FBTztnQkFDMUJtQyxRQUFRUixTQUFTUSxNQUFNO2dCQUN2QkMsZ0JBQWdCVCxTQUFTVSxPQUFPLEVBQUVEO2dCQUNsQ0osT0FBT0EsS0FBSyxDQUFDLEVBQUUsRUFBRU0sVUFDZE4sS0FBSyxDQUFDLEVBQUUsRUFBRU0sVUFDVixpQ0FBaUM7Z0JBQ3BDQyxVQUFVWixTQUFTVSxPQUFPLEVBQUVHO2dCQUM1Qlg7Z0JBQ0FDO2dCQUNBRjtnQkFDQUc7Z0JBQ0FVLFFBQVFULEtBQUssQ0FBQyxFQUFFLEVBQUVTLFNBQVNULEtBQUssQ0FBQyxFQUFFLEVBQUVTLFNBQVMsS0FBSztZQUNwRDtRQUNEO1FBQ0EsSUFBSXRDLGVBQWU7WUFDbEIsTUFBTXVDLGVBQWVsQixjQUFjbUIsTUFBTSxDQUN4QyxDQUFDdkIsTUFBUUEsSUFBSVEsS0FBSyxDQUFDZ0IsTUFBTSxJQUFJeEIsSUFBSVcsV0FBVyxDQUFDYSxNQUFNLElBQUl4QixJQUFJWSxLQUFLO1lBRWpFLElBQUlVLGNBQWM7Z0JBQ2pCM0MsSUFBSVUsTUFBTSxDQUFDLEtBQUtvQyxJQUFJLENBQUM7b0JBQ3BCMUIsTUFBTXVCLGFBQWFFLE1BQU0sR0FBR0YsZUFBZSxJQUFJO29CQUMvQ3RDLFNBQVNlLEtBQUtmLE9BQU87Z0JBQ3RCO1lBQ0QsQ0FBQztRQUNGLE9BQU87WUFDTkwsSUFBSVUsTUFBTSxDQUFDLEtBQUtvQyxJQUFJLENBQUM7Z0JBQ3BCMUIsTUFBTUssY0FBY29CLE1BQU0sR0FBR3BCLGdCQUFnQixJQUFJO2dCQUNqRHBCLFNBQVNlLEtBQUtmLE9BQU87WUFDdEI7UUFDRCxDQUFDO0lBQ0YsRUFBRSxPQUFPMEMsR0FBRztRQUNYYixRQUFRYyxJQUFJLENBQUNEO1FBQ2IvQyxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ3BCQyxTQUFTO1FBQ1Y7SUFDRDtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnRtYXJrZXRwbGFjZS8uL3BhZ2VzL2FwaS9nZXROZnRzRm9yT3duZXIuanM/ZjQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXR3b3JrLCBBbGNoZW15LCBOZnRGaWx0ZXJzIH0gZnJvbSBcImFsY2hlbXktc2RrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblx0Y29uc3QgeyBhZGRyZXNzLCBwYWdlU2l6ZSwgY2hhaW4sIGV4Y2x1ZGVGaWx0ZXIsIHBhZ2VLZXkgfSA9IEpTT04ucGFyc2UoXG5cdFx0cmVxLmJvZHlcblx0KTtcblx0aWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDUpLnNlbmQoeyBtZXNzYWdlOiBcIk9ubHkgUE9TVCByZXF1ZXN0cyBhbGxvd2VkXCIgfSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSB7XG5cdFx0YXBpS2V5OiBwcm9jZXNzLmVudi5BTENIRU1ZX0FQSV9LRVksXG5cdFx0bmV0d29yazogTmV0d29ya1tjaGFpbl0sXG5cdH07XG5cblx0Y29uc3QgYWxjaGVteSA9IG5ldyBBbGNoZW15KHNldHRpbmdzKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IG5mdHMgPSBhd2FpdCBhbGNoZW15Lm5mdC5nZXROZnRzRm9yT3duZXIoYWRkcmVzcywge1xuXHRcdFx0cGFnZVNpemU6IHBhZ2VTaXplID8gcGFnZVNpemUgOiAxMDAsXG5cdFx0XHRleGNsdWRlRmlsdGVyczogZXhjbHVkZUZpbHRlciAmJiBbTmZ0RmlsdGVycy5TUEFNXSxcblx0XHRcdHBhZ2VLZXk6IHBhZ2VLZXkgPyBwYWdlS2V5IDogXCJcIixcblx0XHR9KTtcblxuXHRcdGNvbnN0IGZvcm1hdHRlZE5mdHMgPSBuZnRzLm93bmVkTmZ0cy5tYXAoKG5mdCkgPT4ge1xuXHRcdFx0Y29uc3QgeyBjb250cmFjdCwgdGl0bGUsIHRva2VuVHlwZSwgdG9rZW5JZCwgZGVzY3JpcHRpb24sIG1lZGlhIH0gPVxuXHRcdFx0XHRuZnQ7XG5cdFx0XHRjb25zb2xlLmxvZyhuZnQubWVkaWEpO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y29udHJhY3Q6IGNvbnRyYWN0LmFkZHJlc3MsXG5cdFx0XHRcdHN5bWJvbDogY29udHJhY3Quc3ltYm9sLFxuXHRcdFx0XHRjb2xsZWN0aW9uTmFtZTogY29udHJhY3Qub3BlblNlYT8uY29sbGVjdGlvbk5hbWUsXG5cdFx0XHRcdG1lZGlhOiBtZWRpYVswXT8uZ2F0ZXdheVxuXHRcdFx0XHRcdD8gbWVkaWFbMF0/LmdhdGV3YXlcblx0XHRcdFx0XHQ6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMFwiLFxuXHRcdFx0XHR2ZXJpZmllZDogY29udHJhY3Qub3BlblNlYT8uc2FmZWxpc3RSZXF1ZXN0U3RhdHVzLFxuXHRcdFx0XHR0b2tlblR5cGUsXG5cdFx0XHRcdHRva2VuSWQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRkZXNjcmlwdGlvbixcblx0XHRcdFx0Zm9ybWF0OiBtZWRpYVswXT8uZm9ybWF0ID8gbWVkaWFbMF0/LmZvcm1hdCA6IFwicG5nXCIsXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdGlmIChleGNsdWRlRmlsdGVyKSB7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZE5mdHMgPSBmb3JtYXR0ZWROZnRzLmZpbHRlcihcblx0XHRcdFx0KG5mdCkgPT4gbmZ0LnRpdGxlLmxlbmd0aCAmJiBuZnQuZGVzY3JpcHRpb24ubGVuZ3RoICYmIG5mdC5tZWRpYVxuXHRcdFx0KTtcblx0XHRcdGlmIChmaWx0ZXJlZE5mdHMpIHtcblx0XHRcdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xuXHRcdFx0XHRcdG5mdHM6IGZpbHRlcmVkTmZ0cy5sZW5ndGggPyBmaWx0ZXJlZE5mdHMgOiBudWxsLFxuXHRcdFx0XHRcdHBhZ2VLZXk6IG5mdHMucGFnZUtleSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdFx0bmZ0czogZm9ybWF0dGVkTmZ0cy5sZW5ndGggPyBmb3JtYXR0ZWROZnRzIDogbnVsbCxcblx0XHRcdFx0cGFnZUtleTogbmZ0cy5wYWdlS2V5LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcblx0XHRcdG1lc3NhZ2U6IFwic29tZXRoaW5nIHdlbnQgd3JvbmcsIGNoZWNrIHRoZSBsb2cgaW4geW91ciB0ZXJtaW5hbFwiLFxuXHRcdH0pO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiTmV0d29yayIsIkFsY2hlbXkiLCJOZnRGaWx0ZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJwYWdlU2l6ZSIsImNoYWluIiwiZXhjbHVkZUZpbHRlciIsInBhZ2VLZXkiLCJKU09OIiwicGFyc2UiLCJib2R5IiwibWV0aG9kIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJzZXR0aW5ncyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBTENIRU1ZX0FQSV9LRVkiLCJuZXR3b3JrIiwiYWxjaGVteSIsIm5mdHMiLCJuZnQiLCJnZXROZnRzRm9yT3duZXIiLCJleGNsdWRlRmlsdGVycyIsIlNQQU0iLCJmb3JtYXR0ZWROZnRzIiwib3duZWROZnRzIiwibWFwIiwiY29udHJhY3QiLCJ0aXRsZSIsInRva2VuVHlwZSIsInRva2VuSWQiLCJkZXNjcmlwdGlvbiIsIm1lZGlhIiwiY29uc29sZSIsImxvZyIsInN5bWJvbCIsImNvbGxlY3Rpb25OYW1lIiwib3BlblNlYSIsImdhdGV3YXkiLCJ2ZXJpZmllZCIsInNhZmVsaXN0UmVxdWVzdFN0YXR1cyIsImZvcm1hdCIsImZpbHRlcmVkTmZ0cyIsImZpbHRlciIsImxlbmd0aCIsImpzb24iLCJlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNftsForOwner.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNftsForOwner.js"));
module.exports = __webpack_exports__;

})();