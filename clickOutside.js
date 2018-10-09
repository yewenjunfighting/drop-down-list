Vue.directive("clickoutside",{
    bind: function(el, binding, vnode){
        function documentHandler(e){
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value();
            }
        }
        el._vueClickOutSide_ = documentHandler;
        document.addEventListener("click", documentHandler);
    },
    unbind: function(el, bindling){
        delete el._vueClickOutSide_;
        document.removeEventListener("click", el._vueClickOutSide_);
    }
} );