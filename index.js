module.exports = {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-css-modules",
    ],
    "ignoreFiles": [
        "node_modules/**/*",
    ],
    "plugins": [
        "stylelint-scss",
        "stylelint-order",
    ],
    "rules": {
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/at-rule-no-unknown": [
            true,
            { "ignoreAtRules": ["apply"] },
        ],
        "at-rule-no-unknown": null,
        "at-rule-blacklist": ["extend"],
        "at-rule-no-vendor-prefix": true,
        "color-named": "never",
        "color-hex-case": "upper",
        "color-hex-length": "long",
        "color-no-invalid-hex": true,
        "declaration-block-semicolon-newline-after": "always",
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-space-after": "always",
        "declaration-property-unit-whitelist": {
            "font-size": [
                "em",
                "px",
                "rem",
                "vw",
            ],
        },
        "font-family-name-quotes": "always-where-recommended",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "never",
        "indentation": 4,
        "keyframe-declaration-no-important": true,
        "length-zero-no-unit": true,
        "max-nesting-depth": 4,
        "media-feature-name-no-vendor-prefix": true,
        "no-duplicate-at-import-rules": true,
        "no-empty-source": true,
        "no-extra-semicolons": true,
        "number-leading-zero": "always",
        "order/properties-order": [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "flex",
            "flex-basis",
            "flex-direction",
            "flex-flow",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "align-content",
            "align-items",
            "align-self",
            "justify-content",
            "order",
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "margin-top",
            "margin-right",
            "margin-bottom",
            "margin-left",
            "padding",
            "padding-top",
            "padding-right",
            "padding-bottom",
            "padding-left",
            "float",
            "clear",
            "columns",
            "column-gap",
            "column-fill",
            "column-rule",
            "column-span",
            "column-count",
            "column-width",
            "transform",
            "transform-box",
            "transform-origin",
            "transform-style",
            "transition",
            "transition-delay",
            "transition-duration",
            "transition-property",
            "transition-timing-function",
            "border",
            "border-top",
            "border-right",
            "border-bottom",
            "border-left",
            "border-width",
            "border-top-width",
            "border-right-width",
            "border-bottom-width",
            "border-left-width",
            "border-style",
            "border-top-style",
            "border-right-style",
            "border-bottom-style",
            "border-left-style",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-color",
            "border-top-color",
            "border-right-color",
            "border-bottom-color",
            "border-left-color",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "background",
            "background-attachment",
            "background-clip",
            "background-color",
            "background-image",
            "background-repeat",
            "background-position",
            "background-size",
            "color",
            "font",
            "font-family",
            "font-size",
            "font-smoothing",
            "font-style",
            "font-variant",
            "font-weight",
            "letter-spacing",
            "line-height",
            "list-style",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-rendering",
            "text-shadow",
            "text-transform",
            "text-wrap",
            "white-space",
            "word-spacing",
            "border-collapse",
            "border-spacing",
            "box-shadow",
            "caption-side",
            "content",
            "cursor",
            "empty-cells",
            "opacity",
            "overflow",
            "quotes",
            "speak",
            "table-layout",
            "vertical-align",
            "visibility",
            "z-index",
        ],
        "property-case": "lower",
        "property-no-unknown": [
            true,
            { "ignoreProperties": ["contain", "composes"] },
        ],
        "selector-attribute-quotes": "always",
        "selector-list-comma-space-after": "always",
        "selector-max-compound-selectors": 10,
        "selector-max-specificity": "1,2,2",
        "selector-max-id": 0,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-no-unknown": [
            true,
            { ignorePseudoClasses: ["horizontal", "global", "local"] },
        ],
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "string-no-newline": true,
        "string-quotes": "double",
        "unit-case": "lower",
        "value-no-vendor-prefix": true,
        "value-keyword-case": "lower"
    },
};
