const { createClient } = require('@supabase/supabase-js');
const { supabaseUrl, supabaseKey } = require('../config');

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  getAllProducts: async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      throw error;
    }
    return data;
  },
  // Implementar funciones adicionales según sea necesario
};
